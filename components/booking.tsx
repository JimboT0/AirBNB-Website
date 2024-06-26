'use client';

import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import CaptureLandingPageURL from '@/components/captureLandingPageURL';

import { ContactFormSchema } from '@/lib/schema'
import { sendEmail } from '@/app/_actions'
import { toast } from 'sonner'
import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import { logEvent } from '../lib/ga';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';




export type ContactFormInputs = z.infer<typeof ContactFormSchema>



export default function BookingForm() {
  const [landingPageURL, setLandingPageURL] = useState('');

  useEffect(() => {
    const storedLandingPageURL = localStorage.getItem('landingPageURL');
    setLandingPageURL(storedLandingPageURL || '');
  }, []);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting }, setValue } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema)
  });

  useEffect(() => {
    setValue('landingPageURL', landingPageURL);
  }, [landingPageURL, setValue]);

  const processForm: SubmitHandler<ContactFormInputs> = async data => {
    const result = await sendEmail(data);

    if (result?.success) {
      toast.success('Email sent!');
      reset();
      console.log(`Customer from ${landingPageURL} has submitted the form.`);
      return;
    }
    toast.error('Something went wrong!');
  };



  const handleButtonClick = async (buttonLabel: string, pathname: string) => {
    const action = `Click ${buttonLabel}`;
    const label = `click_${buttonLabel.toLowerCase()} on ${pathname}`;
    logEvent('Button', action, label);
    console.log(`Customer from ${landingPageURL} has clicked ${buttonLabel} on ${pathname}`);
    
    const journey = {
      landingPageURL,
      pathname: pathname,
      timestamp: new Date().toISOString(),
    };

  
    try {
      await addDoc(collection(db, 'customerJourneys'), journey);
      // Successfully logged journey to Firestore
    } catch (error) {
      console.error('Error saving journey:', error);
    }
  };



  return (
    <div className="flex items-center justify-center h-full w-full p-3 py-2 mb-10 ">
      <div className="bg-gray-100 dark:bg-gray-800 p-8 max-w-md w-full rounded-lg">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold p-2">Make a booking</h2>
          <p className="text-gray-500 dark:text-gray-400 pb-10">Fill out the form below to schedule your appointment.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(processForm)}>
          <div className="grid gap-4">

            <div className="space-y-2">
              <label className="p-2" htmlFor="name">Name</label>
              <input id="name" className="w-full p-2 border-2 border-solid rounded-lg" {...register('name')} placeholder="Enter your name" />
              {errors.name?.message && (
                <p className='ml-1 text-sm text-red-400'>{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="p-2" htmlFor="surname">Surname</label>
              <input id="surname" className="w-full p-2 border-2 border-solid rounded-lg" {...register('surname')} placeholder="Enter your surname" />
              {errors.surname?.message && (
                <p className='ml-1 text-sm text-red-400'>{errors.surname.message}</p>
              )}
            </div>

          </div>

          <div className="space-y-2">
            <label className="p-2" htmlFor="email">Email</label>
            <input id="email" className="w-full p-2 border-2 border-solid rounded-lg" {...register('email')} placeholder="Enter your email" type="email" />
            {errors.email?.message && (
              <p className='ml-1 text-sm text-red-400'>{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="p-2" htmlFor="phone">Phone</label>
            <input id="phone" className="w-full p-2 border-2 border-solid rounded-lg" {...register('phone')} placeholder="Enter your phone number" />
            {errors.phone?.message && (
              <p className='ml-1 text-sm text-red-400'>{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="p-2" htmlFor="date">Date</label>
            <input className="w-full p-2 border-2 border-solid rounded-lg" id="date" {...register('date')} type="date" />
            {errors.date?.message && (
              <p className='ml-1 text-sm text-red-400'>{errors.date.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="p-2" htmlFor="time">Time</label>
            <input className="w-full p-2 border-2 border-solid rounded-lg" id="time" {...register('time')} type="time" />
            {errors.time?.message && (
              <p className='ml-1 text-sm text-red-400'>{errors.time.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="p-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border-2 border-solid rounded-lg" id="message" {...register('message')} placeholder="Enter your message" />
            {errors.message?.message && (
              <p className='ml-1 text-sm text-red-400'>{errors.message.message}</p>
            )}
          </div>

          <input type="hidden" {...register('landingPageURL', { value: landingPageURL })} />

          <div className="p-3">
            <button className="w-full border rounded-lg bg-orange-400 p-2" disabled={isSubmitting} type="submit" onClick={() => handleButtonClick('Submit', window.location.pathname)}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>

        </form>
      </div>
    </div>

  );
}




// 'use client'

// import { useForm, SubmitHandler } from 'react-hook-form'

// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'

// import { ContactFormSchema } from '@/lib/schema'
// import { sendEmail } from '@/app/_actions'
// import { toast } from 'sonner'

// export type ContactFormInputs = z.infer<typeof ContactFormSchema>

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting }
//   } = useForm<ContactFormInputs>({
//     resolver: zodResolver(ContactFormSchema)
//   })

//   const processForm: SubmitHandler<ContactFormInputs> = async data => {
//     const result = await sendEmail(data)

//     if (result?.success) {
//       console.log({ data: result.data })
//       toast.success('Email sent!')
//       reset()
//       return
//     }

//     // toast error
//     console.log(result?.error)
//     toast.error('Something went wrong!')
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(processForm)}
//       className='mx-auto flex flex-1 flex-col gap-4 text-gray-600 sm:w-1/2 lg:w-1/3'
//     >
//       <div>
//         <input
//           placeholder='name'
//           className='w-full rounded-lg'
//           {...register('name')}
//         />
//         {errors.name?.message && (
//           <p className='ml-1 mt-1 text-sm text-red-400'>
//             {errors.name.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <input
//           placeholder='email'
//           className='w-full rounded-lg'
//           {...register('email')}
//         />
//         {errors.email?.message && (
//           <p className='ml-1 mt-1 text-sm text-red-400'>
//             {errors.email.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <textarea
//           rows={5}
//           cols={5}
//           placeholder='message'
//           className='w-full rounded-lg'
//           {...register('message')}
//         />
//         {errors.message?.message && (
//           <p className='ml-1 text-sm text-red-400'>{errors.message.message}</p>
//         )}
//       </div>

//       <button
//         disabled={isSubmitting}
//         className='rounded-lg border border-black bg-black py-2.5 font-medium text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50'
//       >
//         {isSubmitting ? 'Submitting...' : 'Submit'}
//       </button>
//     </form>
//   )
// }