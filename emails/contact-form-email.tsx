import { client } from "@/sanity/lib/client"
import { product } from "@/sanity/schemas/product-schema"
import { groq } from "next-sanity"
import { Product } from "use-shopping-cart/core"

interface ContactFormEmailProps {
  name: string
  surname: string
  email: string
  phone: string
  time: string 
  date: string 
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  surname,
  email,
  phone,
  time,
  date,
  message,
  
}, ) => {

  return(
    <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Enquiry Form Submission</h4>
      <div style={{ marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Enquiry from <span style={{ fontWeight: 'bold' }}>{name} {surname}</span></h2>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Phone number:</h4>
        <p>{phone}</p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Email:</h4>
        <p>{email}</p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Time:</h4>
        <p>{time}</p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Date:</h4>
        <p>{date}</p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Message:</h4>
        <p>{message}</p>
      </div>
    </div>
)
}

export default ContactFormEmail
