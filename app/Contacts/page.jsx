'use client'
import { useState } from 'react'
import style from '@/app/Contacts/Contact.module.css'

export default function Contact() {
const [firstName, setFirstName] = useState('')
const handleFirstName = (event) => setFirstName(event.target.value);

const [lastName, setLastName] = useState('')
const handleLastName = (event) => setLastName(event.target.value);
// commentaire 
const [email, setEmail] = useState('')
const handleEmail = (event) => setEmail(event.target.value);

const [phone, setPhone] = useState('')
const handlePhone = (event) => setPhone(event.target.value);

const [topic, setTopic] = useState('')
const handleTopic = (event) => setTopic(event.target.value);

const [queryType, setQueryType] = useState('')
const handleQueryType = (event) => setQueryType(event.target.value);

const [message, setMessage] = useState('')
const handleMessage = (event) => setMessage(event.target.value);

const [agree, setAgree] = useState(false)
const handleAgree = (event) => setAgree(event.target.value);

const [firstNameError, setFirstNameError] = useState('')
const [lastNameError, setLastNameError] = useState('')
const [emailError, setEmailError] = useState('')
const [phoneError, setPhoneError]= useState('') 
const [messageError, setMessageError] = useState('')

const [formSubmitted, setFormSubmitted] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault()

    let isValid = true

    if (!firstName || firstName.length < 4) 
    {
    isValid = false
    setFirstNameError('First name is not valid')
    } 
    else {
    setFirstNameError('')
    }

    if (!lastName || lastName.length < 4) 
    {
    isValid = false
    setLastNameError('Last name is not')
    } 
    else {
    setLastNameError('')
    }

    if (!email || !email.includes('@')) 
    {
    isValid = false
    setEmailError('Please enter a valid email address')
    } 
    else {
    setEmailError('')
    }

    if (!phone) 
    {
    isValid = false
    setPhoneError('Please enter a phone number')
    } 
    else {
    setPhoneError('')
    }

    if (!message) 
    {
    isValid = false
    setMessageError('Please enter a massage')
    } 
    else {
    setMessageError('')
    }

    if (isValid) {
    setFormSubmitted(true)

    console.log({
        firstName,
        lastName,
        email,
        phone,
        topic,
        queryType,
        message,
        agree,
    })

    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setTopic('')
    setQueryType('')
    setMessage('')
    setAgree(false)
    }
}

return (
    <div>
    <div className={style.contactContainer}>
        <div className={style.contactHeader}>
        <h1>Get in touch</h1>
        <p>If you have any questions or inquiries, feel free to reach out to us by</p>
        <p>leave a message directly here by filling in this form.</p>
        </div>
        <form className={style.contactForm} onSubmit={handleSubmit}>
        <div className={style.inputGroup}>
            <input type="text" id="first-name" placeholder="First name" value={firstName} onChange={handleFirstName} />
            {firstNameError && <div className={style.error}> {firstNameError} </div> }
            <input type="text" id="last-name" placeholder="Last name" value={lastName} onChange={handleLastName} />
            {lastNameError && <div className={style.error}> {lastNameError} </div> }
        </div>
        <div className={style.inputGroup}>
            <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmail} />
            {emailError && <div className={style.error}> {emailError} </div> }
            <input type="tel" id="phone" placeholder="Phone number" value={phone} onChange={handlePhone} />
            {phoneError && <div className={style.error}> {phoneError} </div> }
        </div>
        <select id="topic" value={topic} onChange={handleTopic} >
            <option value="">Choose a topic</option>
            <option value="sales">Sales</option>
            <option value="support">Technical support</option>
        </select>
        <div className={style.radioGroup}>
            <label> <input type="radio" name="query-type" value="general" onChange={handleQueryType} /> General inquiry </label>
            <label> <input type="radio" name="query-type" value="billing" onChange={handleQueryType} /> Billing question </label>
            <label> <input type="radio" name="query-type" value="technical" onChange={handleQueryType} /> Technical support </label>
        </div>
        <textarea id="message" placeholder="Your message" value={message} onChange={handleMessage}> 
        {messageError && <div className={style.error}> {messageError} </div> }
        </textarea>
        <label className={style.checkboxContainer}> 
            <input type="checkbox" id="agree" checked={agree} onChange={handleAgree} /> I agree to the Terms
            <span className={style.checkmark}></span>
        </label>
        <button type="submit">Submit</button>
        {formSubmitted &&  <div> Your message has been successfully sent </div> }
        <div className={style.otherContact}>
            <p>Email: hello@eventsonline.com</p>
            <p>Phone: +1 (613) 741-7158</p>
            <p>Office: 400 Den Haag Dr, Ottawa ON K1K 4W8</p>
        </div>
        </form>
    </div>
    </div>
)
}
