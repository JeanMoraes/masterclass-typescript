import { Request, Response } from 'express';
import EmailService from '../services/EmailService'

const users = [
    {"name":"Jean Moraes", "email":"moraes.jean91@gmail.com"},
    {"name":"Stefanny Lopes", "email":"stefannylopes@gmail.com"},
];

export default{
    async index(req: Request, res:Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail(
            {
                to: {
                    name: 'João',
                    email:'joao@email.com'
                },
                message: {
                    subject: 'Email de teste',
                    body:'Mensagem do email...'
                }
            }
        );

        return res.send();
    }
};
