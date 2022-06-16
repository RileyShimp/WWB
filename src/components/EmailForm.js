import emailjs from '@emailjs/browser'
import Form from 'react-bootstrap/Form'
import { useRef } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'

export default function EmailForm() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_71msj87', 'template_mvjiql8', form.current, 'qNFBcTeC0mXDMBAU_').then(
      (result) => {
        handleShow();
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    e.target.reset();
  }


  return (
    <div className='EmailForm'>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Label>Name</Form.Label>
        <Form.Control required type='text' name='user_name' />
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' placeholder='name@example.com' name='user_email' />
        <Form.Label>Message</Form.Label>
        <Form.Control as='textarea' rows={5} name='message' />
        <Button
        variant='primary'
        value="Send"
        type='submit'
        style={{ width: '12rem', margin: '1rem' }}>
        Send
      </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your interest! We will get back to you as soon as possible!
        </Modal.Body>
      </Modal>
    </div>
  )
}
