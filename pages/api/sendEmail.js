// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    console.log('sahdjhsaj', req.body)
    if (req.method === 'POST') {
        const { name, email, message,phone } = req.body;

        // 创建邮件发送器
        const transporter = nodemailer.createTransport({
            //   service: 'Gmail', // 或者使用你喜欢的邮件服务，例如 Outlook, Yahoo
            // host: 'smtp.gmail.com',
            host: 'smtp.163.com',
    port: 465,
    secure: true,
    auth: {
        user: 'dyy811131507@163.com',
        pass: 'YEfyiA45jz8s7Qga'
    }
    // tls: {
    //     rejectUnauthorized: false,
    // },
            // logger: true,  // 启用日志
            //   debug: true,
            // connectionTimeout: 10000,  // 10秒
            // socketTimeout: 10000,
        });
        console.log('ceshi')

        try {
            // 配置邮件内容
            await transporter.sendMail({
                from: "dyy811131507@163.com", // 发送者邮箱
                to: 'dyy811131507@163.com', // 接收者邮箱
                subject: `New message from ${name}`, // 邮件主题
                text: `You have received a new message from ${name} (${email}):
  
                Message:
                ${message}`,  // 纯文本格式的邮件内容
                  html: `
                    <h1 style="color: #333;">New Message from ${name}</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Message:</strong></p>
                    <p style="border: 1px solid #eee; padding: 10px; background-color: #f9f9f9;">${message}</p>
                  `,  // HTML 格式的邮件内容, // 邮件内容
                replyTo:email
            });
            console.log('tryryry')

            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email.' });
            console.error("Error during sendMail:", error);

        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
        console.log('405405405')

    }
}
