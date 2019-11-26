import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
  /**
   * @api {post} /sessions Create Session
   * @apiGroup Sessions
   *
   * @apiSuccess {Object} authInfo User authentication information
   * @apiSuccess {Object} authInfo.user User informations
   * @apiSuccess {Number} authInfo.user.id User identification
   * @apiSuccess {String} authInfo.user.name User name
   * @apiSuccess {String} authInfo.user.email User email address
   * @apiSuccess {String} authInfo.token User JWT
   *
   * @apiSuccessExample {json} Success-Response:
   *    HTTP/1.1 200 OK
   *    {
   *      "user": {
   *        "id": 12,
   *        "name": "Usuário Teste",
   *        "email": "teste@liveon.com"
   *      },
   *      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTU3NDc0MjMxOSwiZXhwIjoxNTc1MzQ3MTE5fQ.od-DMbM168tRcfCBDQhmTbDDEKAZNb-UaGWN1tSgnNU"
   *    }
   *
   */
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
