import { Request,Response} from "express";
import Users  from "../entity/User";
import AppDataSource from "../data-source";
class UserControl{
    public async cada(req:Request,res:Response): Promise<Response>{
        const {name,mail,password} = req.body;

       const nuser = new Users
            nuser.nam = name;
            nuser.mai = mail;
            nuser.pass = password;
        const serUser = await AppDataSource.manager.save(nuser);



        return res.json({
            "foi":nuser
        })
    }
    public async exib(req:Request,res:Response): Promise<Response>{
        const {name,mail,password} = req.body;
        return res.json({
            "foi":"ai"
        })
    }
    

    
}

export default new UserControl
/*
por query
 const serUser = await AppDataSource.manager.query(`
        INSERT INTO users (nam,mai,pass) VALUES
        ('${name}','${mail}','${password}');
        `);

*/ 