'use server'

import { formSchema, type formSchemaType } from "./types"
import EmailTemplate from '@/components/ui/email-template';
import { resend } from "./utils";

export async function sendMessageAction(data: formSchemaType): Promise<{ error?: string; message?: string }> {
  const formData = formSchema.safeParse(data)

  if (!formData.success) {
    let errMessage = ''

    for (const err of formData.error.issues) {
      errMessage += `${err.message}\n`
    }

    return { error: errMessage }
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: 'mortazapor3@gmail.com',
    subject: 'Get In Touch with Morteza Porabdolahi',
    react: EmailTemplate(formData.data)
  });

  if (error) {
    return {
      error: "Something went wrong!"
    }
  }

  return {
    message: 'Message has been sent successfully!'
  }
}
