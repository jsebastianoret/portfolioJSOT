import React from 'react'
import '../../css/Contact.css'

export default function Contact() {
  return (
    <>
    <section className='section-padding pt-5'>

      
    <div className="container"> 
      
      <div className='row '>
                  <div className='col-md-12 '>
                      <div className=' section-header text-center text-black pb-5'>
                          <h2>CONTACT</h2>
                          <hr></hr>
                          <p></p>
                      </div>
                  </div>
        </div>




      <div className="row justify-content-center text-center pb-4">

        <div className='socials'>

            <a className='bk-color ppy-2 ppx-2 mmx-2 round-f' href='https://github.com/jsebastianoret' target='_blank' title='Github'>
                <i className="i-contact bi-github text-blackk" aria-hidden="true" ></i>
            </a>
            
      {/*El margin- y padding lo puse manualmente, pero con Bootstrap se usa mx,mt,mp-2 o px....-3  */}
            
            <a className='bk-color ppy-2 ppx-2 mmx-2 round-f ' target='_blank' href='https://www.linkedin.com/in/jairo-sebastian-ore-tamara-8007472a7/' title='Linkedin'>  
                <i className ="i-contact bi bi-linkedin text-blackk" aria-hidden="true"></i>
            </a>

            <a className='bk-color ppy-2 ppx-2 mmx-2 round-f' download={"my-cv"} href='/pdf/JSebasOT_CV.pdf' target='_blank' title='CV'>
                <i className="i-contact bi bi-filetype-pdf text-blackk" aria-hidden="true" ></i>
            </a>

            {/* <a className='bk-color ppy-2 ppx-2 mmx-2 round-f'>sssss </a> */}

        </div>

      </div>
    </div>
    </section>
    </>
  )
}
