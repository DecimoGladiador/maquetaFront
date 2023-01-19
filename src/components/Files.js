import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
import { Form, Button, Alert } from "react-bootstrap";
import '../css/Files.css'


const Files = ()=>{

    const API_URL = "https://uammero.azurewebsites.net"
    const user = useSelector(selectCurrentUser)
    const [error, setError]=useState(null)
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)
    const [selectedFile, setSelectedFile]= useState(null)
    const [newLoading, setNewLoading] = useState(false)
         
    const handleFileChange = (event)=>{
        setSelectedFile(event.target.files[0])
    }

    const handleDelete = (e)=>{
        axios.delete(`${API_URL}/api/v1/delete/${e.target.id}`)
        .  then(response =>{
            setNewLoading(!newLoading)
        }).catch(response=>{
            console.log(response)
        })
    }
    
    const handleDownload = (e)=>{
        const url = `${API_URL}/api/v1/files/${e.target.id}`
        const link = document.createElement('a');
        link.href = url
        link.click();   
    }

    const handleUpload = ()=>{
        const formData = new FormData()
        formData.append("file",selectedFile)
        console.log(selectedFile)
        if(selectedFile===null || selectedFile===undefined){
            setError(
                <div>
                    <Alert variant="danger">
                    <Alert.Heading>
                    No has seleccionado ningun archivo
                    </Alert.Heading>
                    </Alert>
                 </div>
            )
            return
        }
        axios.post(`${API_URL}/api/v1/upload`,formData)
        .then(response=>{
            setError(
                <div className="row">
                    <Alert variant="success">
                    <Alert.Heading>
                    Archivo cargado correctamente
                    </Alert.Heading>
                    </Alert>
                </div>
            )
            setNewLoading(!newLoading)
        })
        .catch(error=>{
            console.log(error)
        });
    }

    useEffect (()=>{
        if(user.role[0].roleName==="Admin"){
            setFlag(true)
        }
        else{
            setFlag(false)
        }

        axios.get(`${API_URL}/api/v1/files`)
        .then(response =>{
            setData(response.data)
            console.log(response.data)
        })
        .catch(error=>{
            console.error(error)
        })
    },[newLoading, user.role]);

    const admin = (<div>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label className="display-3">Cargar nuevo archivo</Form.Label>
        <Form.Control type="file" style={{borderColor:"green"}} onChange={handleFileChange}/>
        <div className="row gap-2 mt-3">
        {error?error:null}    
        <Button variant="success" size="lg" onClick={handleUpload}>
            Cargar archivo
        </Button>
        </div>
        </Form.Group>    
   </div>)

    return(
        <>
        <div className="container"> 
        <div className="row mb-5">
            {flag?admin:null} 
        </div> 
        <div className="row mb-5">
        <div className="table-responsive table-success table-striped">
        <table className="table">
            <thead>
                <tr>
                    <th>Archivo</th>
                    <th>Descarga</th>
                    {flag?<th>Elimina</th>:null}
                </tr>
            </thead>
            <tbody>
                {data.map(item=>(
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td><button className="btn btn-success" id={item.id} name={item.name} onClick={handleDownload}>Descargar</button></td>
                        {flag?<td><button className="btn btn-danger" id={item.id} name={item.name} onClick={handleDelete}>Eliminar</button></td>:null}
                    </tr>
                ) )}
            </tbody>
        </table>
        </div>
        </div>
        </div>
        </>
    )
}

export default Files