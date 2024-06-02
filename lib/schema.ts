import { z } from 'zod'

export const FormDataSchema = z.object({
<<<<<<< HEAD
  name: z.string().nonempty('Name is required.'),
  surname: z.string().nonempty('Surname is reuqired.'),
  email: z.string().nonempty('Email is required.').email('Invalid email.'),
  phone: z.string().min(10, { message: 'Must be a valid mobile number' }).max(14, { message: 'Must be a valid mobile number' }),
  date: z.string().nonempty('Date is rquqired.'),
  time: z.string().nonempty('Time is required.'),
  message: z
    .string()
    .nonempty('Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' }),
  landingPageURL: z.string()

=======
    name: z.string().nonempty('Name is required.'),
    surname: z.string().nonempty ('Surname is reuqired.'),
    email: z.string().nonempty('Email is required.').email('Invalid email.'),
    phone: z.string().min(10, { message: 'Must be a valid mobile number' }).max(14, { message: 'Must be a valid mobile number' }),
    date: z.string().nonempty ('Date is rquqired.'),
    time: z.string().nonempty ('Time is required.'),
    message: z
      .string()
      .nonempty('Message is required.')
      .min(6, { message: 'Message must be at least 6 characters.' })
>>>>>>> main
})

export const ContactFormSchema = z.object({
  name: z.string().nonempty('Name is required.'),
<<<<<<< HEAD
  surname: z.string().nonempty('Surname is reuqired.'),
  email: z.string().nonempty('Email is required.').email('Invalid email.'),
  phone: z.string().min(10, { message: 'Must be a valid mobile number' }).max(14, { message: 'Must be a valid mobile number' }),
  date: z.string().nonempty('Date is rquqired.'),
  time: z.string().nonempty('Time is required.'),
  message: z
    .string()
    .nonempty('Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' }),
  landingPageURL: z.string()
=======
  surname: z.string().nonempty ('Surname is reuqired.'),
  email: z.string().nonempty('Email is required.').email('Invalid email.'),
  phone: z.string().min(10, { message: 'Must be a valid mobile number' }).max(14, { message: 'Must be a valid mobile number' }),
  date: z.string().nonempty ('Date is rquqired.'),
  time: z.string().nonempty ('Time is required.'),
  message: z
    .string()
    .nonempty('Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' })
>>>>>>> main
})