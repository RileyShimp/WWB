import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import EmailForm from './EmailForm'

export default function EmailModal() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Email for Purchase Info
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Us An Email!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmailForm/>
        </Modal.Body>
      </Modal> */}
      <Button href='tel:+19717070809' variant='primary'>
        Call for Purchase info
      </Button>
    </>
  )
}
