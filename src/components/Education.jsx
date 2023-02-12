import React from "react";

class Education extends React.Component{
  




    render(){
      const data={
        edu:[
               {
                 id:1,
                 name:'Orange acdemy ',
                 place:'Full stack web developmenttrainee at coding academy by orange',
                 start:"10/2022",
               },
    
               {
                 id:2,
                 name:'University of Jordan ',
                 place:'University of Jordan majoring Business Information Technology',
                 start:"10/2022",
               },
               
               {
                 id:3,
                 name:'University of Jordan ',
                 place:'University of Jordan majoring Business Information Technology',
                 start:"10/2022",
               },
       ]
      }
   
        return(
          
          <section className="Education" id="Education">
          <h2 className="Edu">Education</h2>
            <div>
              {data.edu.map(e=>
        <div className="content">  
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-graduation-cap" />
              <div className="info">
                <h3>{e.name}</h3>
                <p>{e.place}</p>
              </div>
            </div>
          </div>
          </div>

          )}
          </div>
          
          </section>
    
        )
    }
}
export default Education ;