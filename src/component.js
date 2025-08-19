import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import img from "./photo.png";
import { CgProfile } from "react-icons/cg";
import { FaFile } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";
import { Profile_page,Article_page } from './All_Page';

function Example() {
  const [show, setShow] = useState(false);
   const [activePage, setActivePage] = useState("article");
  const handleClose = () => setShow(false);
  const handleShow  = () => setShow(true);

  return (
    <>
    <div id="port">
      <Button variant="#ccc" id="side-button" onClick={handleShow}>
        <FaSlidersH />
      </Button>
    </div>
      

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
             <Image/>
            </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <button className="sidebar-btn"
           onClick={() => {
              setActivePage("profile");
              handleClose();
            }}>
            <CgProfile id="sidebar-profile-icon"/>
            <span id="sidebar-profile-name">Profile</span>
          </button>
          <button className="sidebar-btn"

          onClick={() => {
              setActivePage("article");
              handleClose();
            }}>
            <FaFile id="sidebar-myarticle-icon" />
            <span id="sidebar-myarticle-name">My Article</span>
          </button>
        </Offcanvas.Body>
      </Offcanvas>
      <div>
        {activePage === "profile" ? <Profile_page/> : <Article_page/>}
      </div>

    </>

  );
}


function Image(){
  return<div>
    <img src={img} id="sidebar-logo"></img>
    <span id="sidebar-name">Rashedul Hasan</span>
  </div>
  

}

export {Example};