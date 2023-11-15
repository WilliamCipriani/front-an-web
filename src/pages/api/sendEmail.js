import nodemailer from 'nodemailer';

export default async (req, res) => {
    try {
            if (req.method === 'POST') {
            const { name, email, subject, message } = req.body;
        
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                port: 465,
                secure: true,
                auth: {
                user: 'typsa.reserva@gmail.com', // tu correo de Gmail
                pass: 'krqpyqyixcajmjxf', // tu contraseña de Gmail
                },
            });
        
            const mailOptions = {
                from: email,
                to: 'jflorian@anserviciostecnologicos.com,esanchez@anserviciostecnologicos.com,serviciotecnico@anserviciostecnologicos.com,ventas@anserviciostecnologicos.com', // tu correo donde quieres recibir los mensajes
                subject: `Nuevo mensaje de: ${name} - Asunto: ${subject}`,
                text: message,
            };
        
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Mensaje enviado exitosamente' });
            } else {
            res.status(405).json({ error: 'Método no permitido' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Hubo un error procesando tu solicitud' });
        }
};
