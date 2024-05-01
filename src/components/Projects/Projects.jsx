import React from 'react'
import '../../css/Projects.css'
import ProjectComponent from './ProjectComponent'
import as from '../../images/as.png'
import as2 from '../../images/as2Image.png'
import as3 from '../../images/as3.png'
import as4 from '../../images/as4.png'


export default function Projects() {
  return (
    <>
    <section className='section-padding pt-5' id='section2'>
        
        <div className="container" > 

            {/* UN ROW PARA EL TITULO YO TEXTO */}

            <div className='row pt-4'>
                <div className='col-md-12'>
                    <div className=' section-header text-center text-black pb-5'>
                        <h2>PORTFOLIO</h2>
                        <hr></hr>
                        <p></p>
                    </div>

                </div>
            </div>



            {/* Y OTRO ROW PARA YA LAS CARDS, PORQUE CADA ROW ES CADA LINEA PEEEEEEE */}

            <div className='row mb-5 pb-4'>
            
                <ProjectComponent
                    src={as}
                    title= "Node-Express-MySql-Master"
                    description="Un servicio web hecho con NodeJS conectado a una Base de Datos en MySql."
                />
                <ProjectComponent
                    src={as2}
                    title= "BackEnd Android"
                    description="Un Servicio web hecho en Spring Boot, para un proyecto en Android Studio conectado a una base de datos MySQL."
                />
                <ProjectComponent
                    src={as3}
                    title= "OAuth2.0"
                    description="Incluye 2 proyectos hechos en Spring Boot, el primero el Oauth.Server donde sera un servicio web conectado a Mysql creando usuarios, un LOGIN, roles y un Client. Y el segundo proyecto es el Resource-Server donde probamos el token entregado."
                />
                <ProjectComponent
                    src={as4}
                    title= "Encriptar-Desencriptar"
                    description="Un proyecto hecho con Python, es basico pero necesario. Basicamente pordemo encriptar con la ayuda de ASCII cualquier archivo de texto donde podamos tener informacion confidencial, y desencriptarlo si lo deseamos."
                />

            {/* LE FALTA MAS DIV Y NOSE =>  */}

            {/* <div className='row'>
            <div className="card col-sm-4 pb-5" style={{width: "18rem"}}>
                <img src="src\images\i2.jpg"  className="card-img-top" alt="#"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </div> */}
            </div>
        </div>
    </section>
    </>
  )
}
