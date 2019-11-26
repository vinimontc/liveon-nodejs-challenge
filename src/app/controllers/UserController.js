import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  /**
   * @api {post} /users CreateUser
   * @apiGroup Users
   *
   * @apiSuccess {Object} profile User profile information
   * @apiSuccess {Number} profile.id User identification
   * @apiSuccess {String} profile.name Username
   * @apiSuccess {String} profile.email Users email address
   *
   * @apiSuccessExample {json} Success-Response:
   *    HTTP/1.1 200 OK
   *    {
   *      "id": 11,
   *      "name": "Vinícius Monteiro",
   *      "email": "teste@liveon.com"
   *    }
   *
   */
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  /**
   * @api {put} /users Update User
   * @apiGroup Users
   *
   * @apiParam {String} [name] Optional name of the User for update
   * @apiParam {String} [email] Optional email address for update
   * @apiParam {String} password[oldPassword] Required for password changes only
   * @apiParam {String} password Password for authentication
   * @apiParam {String} oldpassword[confirmPassword] Confirmation for password change
   *
   * @apiSuccess {Object} profile User profile information
   * @apiSuccess {Number} profile.id User identification
   * @apiSuccess {String} profile.name Username
   * @apiSuccess {Email} profile.email Users email address
   *
   * @apiSuccessExample {json} Success-Response:
   *    HTTP/1.1 200 OK
   *    {
   *      "id": 11,
   *      "name": "Vinícius Monteiro",
   *      "email": "teste@liveon.com"
   *    }
   *
   */
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Incorrect current password' });
    }

    const { id, name } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
