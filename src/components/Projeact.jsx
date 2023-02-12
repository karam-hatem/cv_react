import React from "react";




class Project extends React.Component{
    render(){
      const dataa={
        pro:[
              {
                id:1,
                name:'progject 1',
                languge:'Miro',
                decriptionproject:'Business Plan Model &; Mockup Wireframe',
              },

              {
                id:2,
                name:'progject 2',
                languge:'Html&Css',
                decriptionproject:'portfolie',
              },

              {
                id:3,
                name:'progject 3',
                languge:'Html&Css&js',
                decriptionproject:'Students Attendance',
              },

              {
                id:4,
                name:'progject 5',
                languge:'Html&Css&js&PHP',
                decriptionproject:'Aurduino',
              },

              {
                id:5,
                name:'progject 6',
                languge:'Html&Css&js&PHP&laravel',                
                decriptionproject:'Cafe&Restoraent',
              },

              {
                id:6,
                name:'progject 1',
                languge:'Html&Css&js&PHP&laravel',                
                decriptionproject:'lorem',
            }
        ]
      }

        return(
            <section className="Projeact" id="Projeact">
        <h2 className="Pro">Project</h2>

        <div>
          {dataa.pro.map(e=>
        <div className="content"> 
          <div className="box-Pro">
            <div className="icon">
              <i className="fa-solid fa-briefcase" />
              <div className="info">
                <h3>{e.name}</h3>
                <p>{e.languge}</p>
                <p>{e.decriptionproject}  </p>
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
export default Project;