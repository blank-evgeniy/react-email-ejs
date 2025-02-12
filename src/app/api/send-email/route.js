import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
// import fs from "fs";

export async function POST(req) {
  const { fileName, email, ...data } = await req.json();

  if (!email || !data || !fileName) {
    return new Response(
      JSON.stringify({ message: "Необходимы email, fileName и данные ejs" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Путь к EJS шаблону
  const templatePath = path.join(process.cwd(), "src", "ejs", fileName);

  // Рендеринг EJS шаблона
  const html = await ejs.renderFile(templatePath, { ...data });

  // Настройка Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Опции для письма
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Подтверждение вашей электронной почты",
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Письмо успешно отправлено" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Ошибка при отправке письма:", error);
    return new Response(
      JSON.stringify({ message: "Ошибка при отправке письма" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
