import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';



const Footer = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6"  >
            <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/B-logo-1.png' alt="" 
            style={{width:'100px',height:'100px',marginLeft:'20px'}}/>
            <h5 className="title">The Baron</h5>
            <p>
             The best choice to customize your brand.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <Link to="/">Home</Link>
              </li>
              
              <li className="list-unstyled">
              <Link to="/register">Register</Link>
              </li>
              <li className="list-unstyled">
              <Link to="/login">login</Link>
              </li>
              <li className="list-unstyled">
              <Link to="/loginSeller">Login as a seller</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000/"> TheBaron.com</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;