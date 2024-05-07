'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, FormDataSchema } from '@/lib/schema'
import ContactFormEmail from '@/emails/contact-form-email'



type Inputs = z.infer<typeof FormDataSchema>

export async function addEntry(data: Inputs) {
    const result = FormDataSchema.safeParse(data)

    if (result.success) {
        return { success: true, data: result.data }
    }

    if (result.error) {
        return { success: false, error: result.error.format() }
    }
}

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend('re_S6bB7fyA_6ztzjEVEwUDzbGgDybS9ew8v')

export async function sendEmail(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data)

    if (result.success) {
        const { name, surname, email, phone, date, time, message } = result.data
        try {
            const data = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: [ 'james@origintime.co.za'],
                subject: 'Booking form submission',
                text: `Name: ${name}\nSurname: ${surname}\nEmail: ${email}\nPhone: ${phone}\nTime: ${time}\nDate: ${date}\nMessage: ${message}`,
                react: ContactFormEmail({ name, surname, email, phone, time, date, message})
            })
            return { success: true, data }
        } catch (error) {
            return { success: false, error }
        }
    }

    if (result.error) {
        return { success: false, error: result.error.format() }
    }
}
