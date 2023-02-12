import React from "react";

class Footer extends React.Component{
render(){
    return(
        <footer className="footer">
        <p className="footer-tital">Copyrights@<span>Karamhatem</span></p>
        <div className="socil-icon">
          <a href="https://www.linkedin.com/in/karam-daneh-9b6ba11b9/"><i className="fa-brands fa-linkedin" /></a>
          <a href="https://www.karamdaneh97@gmail.com"><i className="fa-solid fa-envelope" /></a>
          <a href="https://github.com/karam-hatem"><i className="fa-brands fa-github" /> </a>
          <a href="https://wa.link/1gcbhp"> <i className="fa-brands fa-whatsapp" /></a>
        </div>
      </footer>

  )
 }
}
export default Footer;