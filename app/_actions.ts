


'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, FormDataSchema } from '@/lib/schema'
import ContactFormEmail from '@/emails/contact-form-email'
import sanityClient from '../sanity/lib/client'

async function getEmailFromSanity() {
    const query = `*[_type == "room" && defined(email) ][0].email`;
    const email = await sanityClient.fetch(query);
    
    return email;
}

async function getNameFromSanity() {
    const query = `*[_type == "product" && defined(name) ][0].name`;
    const name = await sanityClient.fetch(query);
    
    return name;
}


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
    const result = ContactFormSchema.safeParse(data);

    if (result.success) {
        const { name, surname, email, phone, date, time, message,landingPageURL } = result.data;
        try {
            const roomEmail = await getEmailFromSanity();  
            const activityName = await getNameFromSanity();  
            
            const data = await resend.emails.send({
                from: 'RoomFlow<onboarding@resend.dev>',
                to: [roomEmail], 
                cc: ['jimmyjazzz@icloud.com'],
                subject: [activityName] + ' enquiry from RoomFlow',
                text: `Name: ${name}\nSurname: ${surname}\nEmail: ${email}\nPhone: ${phone}\nTime: ${time}\nDate: ${date}\nMessage: ${message}`,
                react: ContactFormEmail({ name, surname, email, phone, time, date, message, landingPageURL})
            });
            return { success: true, data };
        } catch (error) {
            return { success: false, error };
        }
    }

    if (result.error) {
        return { success: false, error: result.error.format() };
    }
}