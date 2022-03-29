import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [data,setData] = useState({
        name:'',
        email:'',
        phone:'',
        website:''
    })
    const navigate = useNavigate();
    const{name,email,phone,website} = data;
    const onChange = (e) => {
      setData({...data,[e.target.name]:e.target.value})
    }
   const onSubmit =async (e) => {
       e.preventDefault();
     await axios.post("http://localhost:3005/users",data)
     navigate("/")
   }
  return(
      <div className="container d-flex justify-content-center border dark mt-4 bg-dark">
        <form className="form-horizontal " onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
                <label className="form-label text-muted display-6">Enter Your Name</label>
                <input
                className="form-control form-control-lg"
                placeholder='Enter Your Name'
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                />
            </div>
            <div className="form-group">
                <label className="form-label text-muted display-6">Enter Your Email</label>
                <input
                className="form-control form-control-lg"
                placeholder='Enter Your Email'
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                />
            </div>
            <div className="form-group">
                <label className="form-label text-muted display-6">Enter Your Phone Number</label>
                <input
                className="form-control form-control-lg"
                placeholder='Enter Your Number'
                name="phone"
                value={phone}
                onChange={(e) => onChange(e)}
                />
            </div>
            <div className="form-group">
                <label className="form-label text-muted display-6">Enter Your Website</label>
                <input
                className="form-control form-control-lg"
                placeholder='Enter Your Website'
                name="website"
                value={website}
                onChange={(e) => onChange(e)}
                />
            </div>
            <div className="d-flex justify-content-center">
                 <button type="submit" className="btn btn-success btn-lg mt-3">Add User</button>
            </div>
           
        </form>       
      </div>
  )
}
export default AddUser;