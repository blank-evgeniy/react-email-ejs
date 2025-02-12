"use client";
import { EjsFile, ejsFiles, emailTemplates } from "@/consts/consts";
import { generateAndDownloadHtml } from "@/lib/generateAndDownloadHtml";
import { sendEmail } from "@/lib/sendEmail";
import { useState } from "react";

export default function Home() {
  const [selectedToDownload, setSelectedToDownload] =
    useState<React.ReactElement>(emailTemplates.passwordReset);

  const [selectedToSend, setSelectedToSend] = useState<EjsFile>(
    ejsFiles.passwordReset
  );

  return (
    <div>
      <h2>Скачать HTML письма</h2>
      {Object.entries(emailTemplates).map(([key, value]) => (
        <button
          disabled={selectedToDownload === value}
          onClick={() => setSelectedToDownload(value)}
          key={key}
        >
          {key}
        </button>
      ))}
      <br />
      <br />
      <button onClick={() => generateAndDownloadHtml(selectedToDownload)}>
        Скачать HTML
      </button>

      <h2>Отправить ejs</h2>
      {Object.entries(ejsFiles).map(([key, value]) => (
        <button
          disabled={selectedToSend === value}
          onClick={() => setSelectedToSend(value)}
          key={key}
        >
          {key}
        </button>
      ))}
      <br />
      <br />
      <button onClick={() => sendEmail(selectedToSend)}>Отправить</button>
    </div>
  );
}
