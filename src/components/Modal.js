import React from 'react'
import { Modal, Button } from "react-bootstrap";

import AddInfoBox from './AddInfoBox'

export const AddModal = props => {
    const { show, handleClose,modalTitle,data,modalColor,headerColor,textColor } = props
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{ background: headerColor ? headerColor : '#10173a'}}>
                <Modal.Title style={{ color : textColor ? textColor : '#fff'}}>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{  background: modalColor ? modalColor : '#293365',marginTop:-2 }}>
                <AddInfoBox data={ data} />
            </Modal.Body>
            <Modal.Footer style={{ background: headerColor ? headerColor : '#10173a', marginTop:-2 }}>
                <Button variant="secondary" onClick={handleClose} style={{  color : textColor ? textColor : '#fff' }}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose} style={{color : textColor ? textColor : '#fff'}}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
