import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <div className='EmailForm'>
      <h1 style={{ fontSize:'3rem' }}>Email Us!</h1>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' name='user_name' />
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' name='user_email' />
        <Form.Label>Message</Form.Label>
        <Form.Control as='textarea' rows={5} name='message' />
        <Button variant='primary' type='submit' style={{ width: '12rem', margin: '1rem' }}>
          Send
        </Button>
      </Form>
    </div>
  )
}
