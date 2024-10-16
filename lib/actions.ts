'use server'
import 'use-server'
import { Resend } from 'resend'
import { z } from 'zod'
import { ContactFormSchema, NewsletterFormSchema } from './schemas'
import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

/*export async function sendEmail(data: Inputs) {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    return { error: true }
  }
  return { error: false }
} */

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.com>',
      to: [email],
      cc: ['derby_i@yahoo.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail:${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    })
    if (!data || error) {
      throw new Error('Failed to send email')
    }
    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(data: { email: string }) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }
  return { success: true }
}
