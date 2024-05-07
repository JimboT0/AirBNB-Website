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

interface Props {
  params: {
    slug: string
  }
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
  <div>
    <h4>Booking form submission</h4>
    <p>
      <h2>Enquiry from <strong>{name} {surname}</strong></h2> 
    </p>
    <h4>Phone number:</h4>
    <p>{phone}</p>
    <h4>Email:</h4>
    <p>{email}</p>
    <br />
    <h4>Time:</h4>
    <p>{time}</p>
    <h4>Date:</h4>
    <p>{date}</p>
    <h4>Message:</h4>
    <p>{message}</p>
    <h1>{product.name}</h1>

  </div>
)
}

export default ContactFormEmail
