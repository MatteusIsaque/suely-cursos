var nodemailer = require('nodemailer');
import type {NextApiRequest, NextApiResponse } from 'next'

import {} from 'next/client'


export default function receber(req:NextApiRequest, res:NextApiResponse){

const {nome, numero} = req.body


if(!nome || !numero){
  res.status(400).json({
    mensage:"dados não preenchido"
  })
}

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: `${process.env.USERMAIL}`,
    pass: `${process.env.PASSMAIL}`
  }
});

var mailOptions = {
  from: 'formularioisaquesestudios@gmail.com',
  to: 'formularioisaquesestudios@gmail.com',
  subject: 'Email recebido pela campanha',
  text:
   `
  Olá esse email chegou do site:
  nome: ${nome}
  numero: ${numero}
  `
};

transporter.sendMail(mailOptions); 


}