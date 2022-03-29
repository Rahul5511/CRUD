import React from 'react'

const Contact = () => {
  return (
     <div className="container d-flex flex-column border p-4 mt-4 bg-dark">
       <h2 className="text-center fw-bold text-white">Contact us</h2>
       <form>
         <div className="form-group">
          <input
           type="text"
           className="form-control"
           placeholder='Name'
           />
         </div>
         <div className="form-group">
          <input
           type="text"
           className="form-control rounded mt-2"
           placeholder='Email'
           />
         </div>
         <div className="form-group">
          <input
           type="text"
           className="form-control rounded mt-2"
           placeholder='Subject'
           />
         </div>
         <div className="form-group mt-2">
           <textarea className="form-control " rows="3" placeholder='Enter text..'></textarea>
         </div>
         <div className="mt-2 d-flex justify-content-center">
           <button className="btn btn-light btn-lg mx-auto">
           Send Mail
           </button>
         </div>
         
       </form>
     </div>
  )
}

export default Contact