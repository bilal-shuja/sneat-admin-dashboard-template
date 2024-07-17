import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';

const UpdateModal = ({showModal, setShowModal}) => {

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  return (
    <>

<Modal show={showModal} 
   size="lg"
   aria-labelledby="contained-modal-title-vcenter"
   centered
>
        <Modal.Header >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-secondary" onClick={()=>setShowModal(!showModal)}>
            Close
          </button>
          <button className="btn btn-outline-primary">
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default UpdateModal