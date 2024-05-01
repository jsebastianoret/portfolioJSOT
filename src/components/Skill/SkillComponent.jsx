import React from 'react'

export default function SkillComponent(props) {
  return (
    <>
        <div className="col-5 col-md-3 pb-5 ">
          <img src={props.src} className="img-fluid img-skill " alt={props.alt} title={props.title}/>
        </div>  
    </>
  )
}
