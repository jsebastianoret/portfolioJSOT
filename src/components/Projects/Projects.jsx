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
                    description="A web service made with NodeJS connected to a MySql Database."
                />
                <ProjectComponent
                    src={as2}
                    title= "BackEnd Android"
                    description="A Web Service made in Spring Boot, for a project in Android Studio connected to a MySQL database."
                />
                <ProjectComponent
                    src={as3}
                    title= "OAuth2.0"
                    description="It includes 2 projects made in Spring Boot, the first is Oauth.Server where it will be a web service connected to Mysql creating users, a LOGIN, roles and a Client. And the second project is the Resource-Server where we test the delivered token."
                />
                <ProjectComponent
                    src={as4}
                    title= "Encrypt - Decrypt"
                    description="A project made with Python is basic but necessary. Basically we can encrypt with the help of ASCII any text file where we may have confidential information, and decrypt it if we wish."
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
