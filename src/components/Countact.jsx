import React from "react";


class Contact extends React.Component{
    render(){
        return(
            <section className="card content" id="Contact Me">
            <h2 className="card">Contact Me</h2>
            <div className="card1">
              <a href="https://www.linkedin.com/in/karam-daneh-9b6ba11b9/"><i className="fa-brands fa-linkedin" /></a>
              <a href="https://www.karamdaneh97@gmail.com"><i className="fa-solid fa-envelope" /></a>
              <a href="https://github.com/karam-hatem"><i className="fa-brands fa-github" /> </a>
              <a href="https://wa.link/1gcbhp"><i className="fa-brands fa-whatsapp" /></a>
              <i className="fa-solid fa-phone" /><p>+962778029526</p>
            </div>
          </section>


        )
    }
}

export default Contact;