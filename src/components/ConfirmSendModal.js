import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

export default function Example() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}
        type='submit'
        style={{ width: '12rem', margin: '1rem' }}>
        Send
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your interest! We will get back to you as soon as possible!
        </Modal.Body>
      </Modal>
    </>
  )
}
