import React from 'react'
import '../../css/Skill.css'
import SkillComponent from './SkillComponent'

export default function SkillSet() {
  return (
    <>
    <section className='section-padding pt-5 bg-dark ' id='section3'>
      <div className='container '>

      
        <div className='row  pt-5 '>
                  <div className='col-md-12'>
                      <div className='section-header text-center text-white  pb-5'>
                          <h2>SKILLS</h2>
                          <hr></hr>
                          <p></p>
                      </div>
                  </div>
        </div>

{/* 
        OJO OJO: El "col-4" es xs para poner tamaño solo a las pantallas para celulares, pero en la documentacion dice que no es encesario poner "xs"
            En cambio, cuando queremos poner tamaño a una pantalla normal se usa "col-md-4" como sm-md-lg-xd-xll.
            BUSCA EN GRID DE BOOTSTRAP, ESTA AHI TODO SOBRE ESO */}


{/* 
        OJO: El "justify-content-center" en row centra de manera horizontal, osea no importa el tamaño de la pantalla, centra asi.
              Y el "text-center" en un div centra todo el contenido del hijo al centro.
              Usar ambos y se hace responsive creo. */}

    <div className='row justify-content-center text-center mb-5 pb-5'>


      <SkillComponent
        src="src\images\html-css.jpg"
        alt = "HTML-CSS"
        title = "HTML-CSS"
      />
      <SkillComponent
        src="src\images\react-icon.png"
        alt = "React JS"
        title = "React JS"
      />
      <SkillComponent
        src="src\images\js.png"
        alt = "Javascript"
        title = "Javascript"
      />
      <SkillComponent
        src="src\images\git_icon.png"
        alt = "Git"
        title = "Git"
      />
      <SkillComponent
        src="src\images\py-icon.png"
        alt = "Python"
        title = "Python"
      />
       <SkillComponent
        src="src\images\spring-boot-logo.png"
        alt = "Spring Boot"
        title = "Spring Boot"
      />
       <SkillComponent
        src="src\images\database-icon.jpg"
        alt = "Data Bases"
        title = "Data Bases"
      />
       <SkillComponent
        src="src\images\nodejs-icon.png"
        alt = "Node JS"
        title = "Node JS"
      />
        </div>
      </div> 
    </section>
  
    </>
  )
}
