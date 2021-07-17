import React from "react";
import axios from 'axios'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Trash } from 'react-bootstrap-icons';

function DeleteModal(props) {


    const onDelete = (data) => {
        let id = props.data._id;
       axios.delete(`/users/${id}`, data)
       .then(reponse  => {
           console.log(reponse)
           window.location.reload(true);
       })
       .catch(error => {
           console.log(error)
       })}

    return (
      <>
        <Button variant="danger" onClick={onDelete}><Trash className="bi bi-trash" /></Button>
      </>
    );
  }
  

export default DeleteModal