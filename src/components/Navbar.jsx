import React from "react";


class Navebar extends React.Component{
    render(){
        return(
    <header>
      <nav class="navebar">
        <a href="#" className="logo"> <i class="fa-solid fa-hand-point-right"></i> Karam <i class="fa-solid fa-hand-point-left"></i></a>
        <a href="#About me">About </a>
        <a href="#Education"> Education</a>
        <a href="#Projeact">Project </a>
        <a href="#Skils"> Skills </a>
        <a href="#Contact Me">Contact Me</a>
     </nav>
     
   </header>
    );  
   }
}
 export default Navebar ;
