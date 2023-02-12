import React from "react";

class Body extends React.Component{
render(){
    return(
        <section className="main">
        <div> 
          <div>
            <h2>Karam Hatem Daneh<br /> <span>Business Information Technology</span></h2>
            <h3>Full stack web development<br /> trainee at coding academy<br /> by orange</h3> 
          </div>
          <img className="img" src={require("./image/1.jpeg")} alt="No image" ></img>
          <div className="socil-icon">
            <a href="https://www.linkedin.com/in/karam-daneh-9b6ba11b9/"><i className="fa-brands fa-linkedin" /></a>
            <a href="https://www.karamdaneh97@gmail.com"><i className="fa-solid fa-envelope" /></a>
            <a href="https://github.com/karam-hatem"><i className="fa-brands fa-github" /></a>
            <a href="https://wa.link/1gcbhp"><i className="fa-brands fa-whatsapp" /></a>
          </div>
        </div> 
      </section>

      
        


  )
 }
}
export default Body;