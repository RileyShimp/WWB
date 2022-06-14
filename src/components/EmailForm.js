import emailjs from '@emailjs/browser'
import Form from 'react-bootstrap/Form'
import { useRef } from 'react'
import ConfirmSendModal from './ConfirmSendModal'

export default function EmailForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_71msj87', 'template_mvjiql8', form.current, 'qNFBcTeC0mXDMBAU_').then(
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
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' name='user_name' />
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' placeholder='name@example.com' name='user_email' />
        <Form.Label>Message</Form.Label>
        <Form.Control as='textarea' rows={5} name='message' />
        <ConfirmSendModal />
      </Form>
    </div>
  )
}
