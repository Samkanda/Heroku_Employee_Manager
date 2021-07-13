import React from "react";
import { useState } from 'react';
import axios from 'axios'
import {Modal, Button, Form} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Pencil } from 'react-bootstrap-icons';

function Update_Modal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
        console.log(formData.name)
    }

    
    const {register, handleSubmit} = useForm();
    const [formData, setFormData] = useState(props.data);

    const onSubmit = (data) => {
         let id = props.data._id;
        axios.patch(`/users/${id}`, data)
        .then(reponse  => {
            console.log(reponse)
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    return (
      <>
        <Button variant="info" onClick={handleShow}><Pencil className="bi bi-trash" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update User Info</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label >Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" 
                            name="name" {...register('name')} 
                            value={formData.name } onChange={(e) => setFormData(e.target.value)}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                            name="email" {...register('email')} 
                            value={formData.email} onChange={(e) => setFormData(e.target.value)}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Enter Gender" 
                            name="gender" {...register('gender')} 
                            value={formData.gender} onChange={(e) => setFormData(e.target.value)}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" placeholder="Enter Status" 
                            name="status" {...register('status')} 
                            value={formData.status} onChange={(e) => setFormData(e.target.value)}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="formBasicAvatar" label="Avatar image upload" 
                            name="avatar" {...register('avatar')}/>
                    </Form.Group>
                    <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleClose}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Form>  
            </Modal.Body>
        </Modal>
      </>
    );
  }
  

export default Update_Modal 