import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap';
import { Trash, Pencil } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css'

const Show = () => {
    const url = 'https://60d4dcdcc6549200173a50fa.mockapi.io/Users'
    const [users, setProduct] = useState(null)

    useEffect(() => {
        axios.get('/users')
        .then(response => {
            setProduct(response.data)
            console.log(response.data)
         
        })
    }, [url])
        return (
            <>
                {users && users.map((users, index) => {
                return (
                <tr className="book" key={index}>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.gender}</td>
                    <td>{users.status}</td>
                    <td><img alt="avatar" src = {users.avatar}></img ></td>
                <td>
                <Button variant="info"><Pencil className="bi bi-trash" /></Button>
               
                <Button variant="danger"><Trash className="bi bi-trash" /></Button>
                </td>
              </tr>
              
            );
          })}
            </>
        )
    }


export default Show