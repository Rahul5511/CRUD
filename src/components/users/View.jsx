import axios from 'axios'
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const View = () => {
  const {id} = useParams()

  const [data,setData] = useState({
    name:'',
    email:'',
    phone:'',
    website:''
  })

  const {name,email,phone,website} = data;
  useEffect(() => {
    loadDoc();
  },[])
  const loadDoc =async () => {
   const result = await axios.get(`http://localhost:3005/users/${id}`)
   setData(result.data)
  }
  return (
 <div className="container-fluid d-flex justify-content-center flex-row vw-100  mt-4">
    <div className="card">
       <div className="card-header">
         Employee Details
       </div>
       <ul className="list-group list-group-flush">
         <li className="list-group-item">
           <h4 className="card-title">Name</h4>
           <p className="card-text">{name}</p>
         </li>
         <li className="list-group-item">
           <h4 className="card-title">Email</h4>
           <p className="card-text">{email}</p>
         </li>
         <li className="list-group-item">
           <h4 className="card-title">Phone Number</h4>
           <p className="card-text">{phone}</p>
         </li>
         <li className="list-group-item">
           <h4 className="card-title">WebSite</h4>
           <p className="card-text">{website}</p>
         </li>
       </ul>
    </div>
</div>
  )
}

export default View