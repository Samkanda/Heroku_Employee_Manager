import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';
import '../components/Modal.css'

const Show = () => {
    const url = 'https://60d4dcdcc6549200173a50fa.mockapi.io/Users'
    const [users, setProduct] = useState(null);


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
                    <td>{index} </td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.gender}</td>
                    <td>{users.status}</td>
                    <td ><img  className= 'roundedImage' alt="avatar" src = {'uploads/' + users.avatar}></img ></td>
                    {console.log(users.avatar)}
                <td>
                <UpdateModal data = {users}/>
                <DeleteModal data = {users}/>
                </td>
              </tr>
              
            );
          })}
            </>
        )
    }


export default Show