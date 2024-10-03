import { Request, Response } from 'express';
import { UserServices } from '../services/UserServices';


export class UserController {

    userServices: UserServices

    constructor(
        userServices = new UserServices()
    ) {
        this.userServices = userServices;
    }


    createUser = (request: Request, response: Response) => {
        console.log(request.body)
        const user = request.body;

        if (!user.name || !user.email || !user.password) {
            return response.status(404).json({ message: "Bad request! Todos os campos obrigatórios." });
        }

        this.userServices.createUser(user.name, user.email, user.password);

        return response.status(201).json({ message: "Usuário criado" })

    }

    getUser = (request: Request, response: Response) => {

        return response.status(200)
    }

    deleteUser = (request: Request, response: Response) => {

        const user = request.body
        console.log('Deletando usuário...', user)
        return response.status(200).json({ message: 'Usuário deletado' })


    }

}