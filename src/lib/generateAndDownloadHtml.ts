"use client";

import { render } from "@react-email/render";
import { saveAs } from "file-saver";

export const generateAndDownloadHtml = async (Template: React.ReactElement) => {
  const emailHtml = await render(Template);

  const blob = new Blob([emailHtml], { type: "text/html;charset=utf-8" });
  saveAs(blob, "email-template.html");
};
