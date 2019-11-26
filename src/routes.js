import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import PokemonController from './app/controllers/PokemonController';

const routes = new Router();

// Routes without authorization

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/pokemons', PokemonController.index);
routes.get('/pokemons/:id', PokemonController.show);

// Middleware of authorization

routes.use(authMiddleware);

// Routes with authorization

routes.put('/users', UserController.update);

routes.post('/pokemons', PokemonController.store);
routes.put('/pokemons/:id', PokemonController.update);
routes.delete('/pokemons/:id', PokemonController.delete);

export default routes;
