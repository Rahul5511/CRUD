import React from 'react'

const Footer = () => {
  return (
    <div>
          <div className="footer mt-5 bg-dark h-50 py-lg-5">
        <div className="footer-heading text-center">
          <h2 className="text-light">Data Table</h2>
        </div>
        <div className="social-icons text-center ">
          <span className="text-danger fs-3 px-3"><i className="fa-brands fa-twitter-square"></i></span>
          <span className="text-danger fs-3 px-3"><i className="fa-brands fa-facebook-square"></i></span>
          <span className="text-danger fs-3 px-3"><i className="fa-brands fa-instagram-square"></i></span>
        </div>
        <div className="text-center text-light mt-lg-5 ">
           <h5>copyright &copy; 2022 All rights reserved</h5>
        </div>
   </div>
    </div>
  )
}

export default Footer