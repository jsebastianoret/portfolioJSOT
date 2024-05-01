import React from 'react'
import '../css/MainImage.css'

export default function MainImage() {
  return (
    <>

      {/* COMO DIJE, PARA MOVER COSAS DENTRO Y AFUERA USAR POSITION: RELATIVE O ABSOULTE */}

      {/* APRENDE CONTAINER + ROW                  vs               POSITION: RELATIVE o ABSOLUTE + MEDIAD */}

        <div className='MainImage position-relative  '>      
          <div className=" position-absolute top-50 start-0 translate-middle-y text-center  ">
              {/* El mx-5 reemplaza al margin-left:2.5rem, y asi se hace responsive */}
              <div className='max mx-5' > 
                <h1 className='h1' >HI, I AM SEBASTIAN ORE</h1>
                <h2 className='h2'>A SOFTWARE DEVELOPER</h2>
              </div>
          </div>
        </div>
    </>
  )
}
