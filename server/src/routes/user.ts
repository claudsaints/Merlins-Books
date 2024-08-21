import { Router } from 'express';
import userControl from '../controllers/userControl';

const routes = Router();

routes.post("/", userControl.cada);

export default routes;

