"use server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const sender = formData.get("senderEmail");
  if (!validateString(message)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(sender)) {
    return { error: "Invalid message" };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "New contact from portfolio <onboarding@resend.dev>",
      to: "nina.micleusanu93@gmail.com",
      subject: "Message from next-portfolio",
      reply_to: sender as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: sender as string,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
  {
    return data;
  }
};
