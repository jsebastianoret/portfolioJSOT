import React from 'react'


export default function ProjectComponent(props) {
  return (
    <>

    
            <div className="col-12 col-md-12 col-lg-4 pb-5">
                <div className="card text-light text-center bg-dark pb-2">
                    <div className="card-body text-white">
                         <div className="img-area mb-4" >
                          <a href='https://github.com/jsebastianoret?tab=repositories' target='_blank'>
                             <img src={props.src} className="img-fluid" alt="" /></a>
                        </div>
                         <h3 className="card-title">{props.title}</h3>
                         <p className="lead">
                            {props.description}
                        </p>    
                        {/* <button className="btn bg-primary text-white">Click here</button> */}
                    </div>
                </div>
            </div>





    
    
    
    </>
  )
}
