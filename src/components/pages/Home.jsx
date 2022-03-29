import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

const Home = () => {
    const [user,setUser] = useState([]);
    useEffect(() => {
     loadDoc();
    },[])

    const loadDoc =async () => {
      const result = await axios.get("http://localhost:3005/users")
      setUser(result.data)
    }

    const deleteUser =async (id) => {
      await axios.delete(`http://localhost:3005/users/${id}`)
      loadDoc();
    }
  return(
      <div className="container-fluid mt-2">
          <h2 className="text-center">Data Table</h2>
          <table className="table table-dark table-striped table-hover  mt-3">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>WebSite</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {user.map((user,index) =>(
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td className="p-2">
                            <div className="button-group">
                                <Link className="btn btn-primary mx-2"  to={`/users/${user.id}`}>View</Link>
                                <Link className="btn btn-primary"  to={`/users/edit/${user.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={() => {deleteUser(user.id)}}>Delete</button>
                            </div>
                            
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
      </div>
  )
}
export default Home;