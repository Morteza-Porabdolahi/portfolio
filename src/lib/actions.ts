"use server";

import { formBaseSchema } from "./types";
import EmailTemplate from "@/components/ui/email-template";
import { resend } from "./resend";
import { z } from "zod";
import { getTranslations } from "next-intl/server";

export async function sendMessageAction(
  data: z.infer<ReturnType<typeof formBaseSchema>>,
): Promise<{ error?: string; message?: string }> {
  const t = await getTranslations("Contact.ContactForm");
  const formData = formBaseSchema(t).safeParse(data);

  if (!formData.success) {
    let errMessage = "";

    for (const err of formData.error.issues) {
      errMessage += `${err.message}\n`;
    }

    return { error: errMessage };
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "mortazapor3@gmail.com",
    subject: "Get In Touch with Morteza Porabdolahi",
    react: EmailTemplate(formData.data),
  });

  if (error) {
    return {
      error: t("error"),
    };
  }

  return {
    message: t("success"),
  };
}
