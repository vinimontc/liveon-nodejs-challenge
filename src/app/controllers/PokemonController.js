import Pokemon from '../schemas/Pokemon';

class PokemonController {
  /**
   * @api {get} /pokemons List Pokémons
   * @apiGroup Pokemons
   *
   * @apiSuccess {Object[]} pokemon Pokémon informations
   * @apiSuccess {String} pokemon.id Pokémon identification
   * @apiSuccess {String} pokemon.name Pokémon Name
   * @apiSuccess {String[]} profile.type Pokémon type
   * @apiSuccess {String[]} profile.habilities Pokémon skills
   * @apiSuccess {String} pokemon.userId User creator identification
   * @apiSuccess {Date} pokemon.createdAt Creation date
   * @apiSuccess {Date} pokemon.updatedAt Last update date
   * @apiSuccess pokemon.__v
   *
   * @apiSuccessExample {json} Success-Response:
   *    HTTP/1.1 200 OK
   *    [
   *      {
   *        "_id": "5ddca1376782e415b631829d",
   *        "name": "Bulbasaur",
   *        "type": [
   *          "Grama",
   *          "Veneno"
   *        ],
   *        "habilities": [
   *          "chlorophyll",
   *          "overgrow"
   *        ],
   *        "userId": 9,
   *        "createdAt": "2019-11-26T03:51:19.681Z",
   *        "updatedAt": "2019-11-26T03:51:19.681Z",
   *        "__v": 0
   *      }
   *    ]
   *
   */
  async index(req, res) {
    const pokemons = await Pokemon.find()
      .sort('name')
      .limit(20);

    return res.json(pokemons);
  }

  /**
   * @api {post} /pokemons Create Pokémon
   * @apiGroup Pokemons
   *
   * @apiSuccess {String} message Operation completed successfully
   *
   * @apiSuccessExample {json} Success-Response:
   *    HTTP/1.1 200 OK
   *    {
   *      "message": "Pokémon created"
   *    }
   *
   */
  async store(req, res) {
    await Pokemon.create({
      name: req.body.name,
      type: req.body.type,
      habilities: req.body.habilities,
      userId: req.userId,
    });
    return res.json({ message: 'Pokémon created' });
  }

  /**
   * @api {put} /pokemons/:id Update Pokémon
   * @apiGroup Pokemons
   *
   * @apiSuccess {String} message Operation completed successfully
   *
   * @apiSuccessExample {json} Success-Response:
   *    HTTP/1.1 200 OK
   *    {
   *      "message": "Successfully updated Pokemon"
   *    }
   *
   */
  async update(req, res) {
    const pokemon = await Pokemon.findById(req.params.id);

    if (pokemon.userId !== req.userId) {
      return res.status(401).json({ error: 'Validation failed' });
    }

    await Pokemon.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      type: req.body.type,
      habilities: req.body.habilities,
    });

    return res.json({ message: 'Successfully updated Pokemon' });
  }

  /**
   * @api {delete} /pokemons/:id Delete Pokémon
   * @apiGroup Pokemons
   *
   * @apiSuccess {String} message Operation completed successfully
   *
   * @apiSuccessExample {json} Success-Response:
   *    HTTP/1.1 200 OK
   *    {
   *      "message": "Bulbasaur has been deleted"
   *    }
   *
   */
  async delete(req, res) {
    const pokemon = await Pokemon.findById(req.params.id);

    if (!pokemon) {
      return res.status(404).json({ error: 'Pokemon does not found' });
    }

    if (pokemon.userId !== req.userId) {
      return res.status(401).json({ error: 'Validation failed' });
    }

    const { name } = await Pokemon.findByIdAndDelete(req.params.id);

    return res.json({ message: `${name} has been deleted` });
  }

  /**
   * @api {get} /pokemons/:id List Pokémon
   * @apiGroup Pokemons
   *
   * @apiSuccess {Object} pokemon Pokémon informations.
   * @apiSuccess {String} pokemon.id Pokémon identification.
   * @apiSuccess {String} pokemon.name Pokémon Name.
   * @apiSuccess {String[]} profile.type Pokémon type.
   * @apiSuccess {String[]} profile.habilities Pokémon skills.
   * @apiSuccess {String} pokemon.userId User creator identification.
   * @apiSuccess {Date} pokemon.createdAt Creation date.
   * @apiSuccess {Date} pokemon.updatedAt Last update date.
   * @apiSuccess pokemon.__v
   *
   * @apiSuccessExample {json} Success-Response:
   *    HTTP/1.1 200 OK
   *     {
   *       "_id": "5ddca1376782e415b631829d",
   *       "name": "Bulbasaur",
   *       "type": [
   *         "Grama",
   *         "Veneno"
   *       ],
   *       "habilities": [
   *         "chlorophyll",
   *         "overgrow"
   *       ],
   *       "userId": 9,
   *       "createdAt": "2019-11-26T03:51:19.681Z",
   *       "updatedAt": "2019-11-26T03:51:19.681Z",
   *       "__v": 0
   *     }
   *
   */
  async show(req, res) {
    const pokemon = await Pokemon.findById(req.params.id);

    return res.json(pokemon);
  }
}

export default new PokemonController();
