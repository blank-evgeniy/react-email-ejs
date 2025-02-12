import { EjsFile, emails } from "@/consts/consts";

export const sendEmail = async (file: EjsFile) => {
  // Итерируемся по всем адресам электронной почты
  for (const email of Object.values(emails)) {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName: file.fileName,
        email: email,
        ...file.data,
      }),
    });

    const result = await response.json();
    console.log(`Email sent to ${email}:`, result);
  }
};
