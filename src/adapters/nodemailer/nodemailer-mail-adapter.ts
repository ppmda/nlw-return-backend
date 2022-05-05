import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c585692b46e709",
    pass: "a8bb663d8d30fc"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedgat.com',
      to: 'Pamela Silva Coelho <pmlclh@gmail.com>',
      subject: subject,
      html: body,
    });
  }
}