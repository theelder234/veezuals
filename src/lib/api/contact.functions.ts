import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const sendContact = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1),
      email: z.string().email(),
      service: z.string().min(1),
      message: z.string().min(1),
    }),
  )
  .handler(async ({ data }) => {
    // Import nodemailer inside the handler so it does not ship to the client bundle
    const nodemailerMod = await import("nodemailer");
    const createTransport = (nodemailerMod as any).createTransport ?? (nodemailerMod as any).default?.createTransport;

    if (!createTransport) {
      throw new Error("nodemailer is not available on the server");
    }

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: (process.env.SMTP_SECURE ?? "false") === "true",
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
    });

    const to = process.env.EMAIL_TO ?? "designsbyveezuals@gmail.com";
    const from = process.env.EMAIL_FROM ?? data.email;

    const mailOptions = {
      from,
      to,
      subject: `New brief — ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\n\n${data.message}`,
    } as any;

    try {
      const info = await transporter.sendMail(mailOptions);
      return { success: true, info };
    } catch (err) {
      console.error("Failed to send contact email", err);
      throw new Error("Failed to send contact email");
    }
  });
