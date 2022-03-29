import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom'

const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [data,setData] = useState({
      name:'',
      email:'',
      phone:'',
      website:''  
    })

   const onInputChange =((e) => {
        setData({...data,[e.target.name]:e.target.value})
    });

    const onSubmit =async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:3005/users/${id}`,data)
      navigate("/")
    }

    useEffect(() => {
     loadDoc();
    },[])

    const {name,email,phone,website} = data;

  const loadDoc =async () => {
    const result = await axios.get(`http://localhost:3005/users/${id}`)
    setData(result.data)
  }
  return (
    <div className="container p-3 mt-3 w-50 border shadow-sm bg-dark">
      <h2 className="text-center">Edit A User</h2>
      <form onSubmit={(e) => onSubmit(e)}>
     <div className="form-group mt-3">
         <label className="form-label h5 text-muted">Enter The Name</label>
         <input 
         type="text"
         className="form-control"
         name="name"
         placeholder='Enter the name'
         value={name}
         onChange={e =>onInputChange(e)}
         />
     </div>
     <div className="form-group mt-3">
         <label className="form-label h5 text-muted">Enter The Email</label>
         <input 
         type="email"
         className="form-control"
         name="email"
         placeholder='enter the mail'
         value={email}
         onChange={e =>onInputChange(e)}
         />
     </div>
     <div className="form-group mt-3">
         <label className="form-label h5 text-muted">Enter The phone Number</label>
         <input 
         type="text"
         className="form-control"
         name="phone"
         placeholder='enter the number'
         value={phone}
         onChange={e =>onInputChange(e)}
         />
     </div>
     <div className="form-group mt-3">
         <label className="form-label h5 text-muted">Enter The Website</label>
         <input 
         type="text"
         className="form-control"
         name="website"
         placeholder='enter the website'
         value={website}
         onChange={e =>onInputChange(e)}
         />
     </div>
     <button type="submit" className="btn btn-primary btn-lg mt-3 ">Submit</button>
     </form>
    </div>
  )
}

export default Edit