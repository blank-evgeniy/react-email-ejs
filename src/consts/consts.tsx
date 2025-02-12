import EmailConfirmationEmail from "../../emails/email-confirm";
import PasswordResetEmail from "../../emails/password-reset";

export const emailTemplates = {
  passwordReset: <PasswordResetEmail />,
  emailConfirm: <EmailConfirmationEmail />,
};

export const emails = {
  gmail: process.env.NEXT_PUBLIC_GMAIL_2,
  // outlook: process.env.NEXT_PUBLIC_OUTLOOK,
  // yandex: process.env.NEXT_PUBLIC_YANDEX,
  // mail: process.env.NEXT_PUBLIC_MAIL,
  // back: process.env.NEXT_PUBLIC_BACK,
};

export interface EjsFile {
  fileName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export const ejsFiles: Record<string, EjsFile> = {
  passwordReset: {
    data: { resetLink: "https://vk.com/im" },
    fileName: "password-reset.ejs",
  },
  emailConfirm: {
    data: { confirmLink: "https://vk.com/im" },
    fileName: "email-confirm.ejs",
  },
};
