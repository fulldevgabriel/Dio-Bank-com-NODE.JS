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
        const user = request.body;

        if (!user.name) {
            return response.status(404).json({ message: "Bad request! Name obrigatório." });
        }

        if (!user.email) {
            return response.status(404).json({ message: "Bad request! Email obrigatório." });
        }

        this.userServices.createUser(user.name, user.email);

        return response.status(201).json({ message: "Usuário criado" })

    }

    getAllUser = (request: Request, response: Response) => {

        const users = this.userServices.getAllUsers();

        return response.status(200).json(users);
    }

    deleteUser = (request: Request, response: Response) => {

        const user = request.body
        console.log('Deletando usuário...', user)
        return response.status(200).json({ message: 'Usuário deletado' })


    }

}