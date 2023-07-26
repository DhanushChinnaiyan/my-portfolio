import React from 'react';
import projectdata from './projectdata'
import './project.css';

const Project = () => {


  return (
    // items.frontendgithubLink
    <div className="projectdiv" id='project'>
        <div className="projecttittle">
            Projects :
        </div>
        
        <div className="projectcarddiv">
        {projectdata.map((items,index)=>{
           
            return(
                <div key ={index} className="projectcard">

                    <div className="projectName">
                        {items.projectName} 
                    </div>
                    <div className="projectimage">
                        <img src={items.projectImage} alt="nothing" />
                    </div>
                    <div className="buttonLink">
                        <a href={items.frontendgithubLink} target="_blank" rel="noopener noreferrer" ><button>Frontend Source Code</button></a>
                        <a href={items.deployedLink} target="_blank" rel="noopener noreferrer" ><button>Live Site</button></a>
                        <a href={items.backendgithubLink} target="_blank" rel="noopener noreferrer" ><button>Backend Source Code</button></a>
                    </div>
                    
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Project