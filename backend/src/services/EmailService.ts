interface IMailTo{
    name: string;
    email: string;
}

interface IMailMessage{
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMailDTO{
    to: IMailTo;
    message: IMailMessage;
}

class EmailService{
    sendMail({to, message}: IMailDTO){
        console.log(`email enviado para ${to.name}, ${message.subject}!`);
    }
}

export default EmailService;