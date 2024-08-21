import { Router, Request,Response} from "express";
import userControl from "./user";

const routes = Router();

routes.use("/user", userControl);

routes.use((req:Request,res:Response) => res.json({"err":"essa rota não existe"}) )

export default routes;