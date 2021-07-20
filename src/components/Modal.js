import React from "react";
import { useState } from 'react';
import axios from 'axios'
import {Modal, Button, Form} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormData from 'form-data'


function ModalForm() {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        let formdata = new FormData();
        let avatar = data.avatar[0]
        formdata.append('avatar', avatar)
        formdata.append('email', data.email)
        formdata.append('name', data.name)
        formdata.append('status', data.status)
        formdata.append('gender', data.gender)


        axios.post('/users', formdata)
        .then(reponse  => {
            console.log(reponse.data)
            window.location.reload(true);
        })
        .catch(error => {
            console.log(error)
            console.log("errorsds")
        })
        
    }

    return (
      <>
        <Button variant="dark" onClick={handleShow}>
          Add User
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New User</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <Form.Group controlId="formBasicName">
                        <Form.Label >Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" 
                            name="name" {...register('name')}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                            name="email" {...register('email')}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Enter Gender" 
                            name="gender" {...register('gender')}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" placeholder="Enter Status" 
                            name="status" {...register('status')}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="formBasicAvatar" label="Avatar image upload" 
                            name="avatar" filename="avatar" {...register('avatar')}/>
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
  

export default ModalForm 