import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
     <div id="footer">
        <h4>ELIZABETH CYNTHIA <p>is my name, and if you will like to revisit any section you can click on any of the icon</p></h4>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        
        <div className="icon">
          <a href="/"><i class="fa-solid fa-house"></i>Home</a>
          <a href="about"><i class="fa-solid fa-address-card"></i>About</a>
          <a href="gallery"><i class="fa-brands fa-servicestack"></i>Gallery</a>
          <a href="service"><i class="fa-solid fa-photo-film"></i>Service</a>
          <a href="contact"><i class="fa-solid fa-phone-volume"></i>Contact</a>
        </div>
        <p>In case of anything else you can link me on various social media</p>
        <div className="icon">
           <a href=""><i class="fa-brands fa-whatsapp"></i></a>
           <a href=""><i class="fa-brands fa-facebook"></i></a>
           <a href=""><i class="fa-brands fa-instagram"></i></a>
           <a href=""><i class="fa-brands fa-tiktok"></i></a>
        </div>
     </div>
    );
};

export default Footer;