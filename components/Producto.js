import Image from 'next/image'
import React from 'react'
import { formatDinero } from '../helpers'
import  useQuiosco  from '../hooks/useQuiosco'

const Producto = ({producto}) => {

    const {nombre, imagen, precio} = producto
    const {handleSetProducto, handleChangeModal} = useQuiosco()

  return (
    <div className='border p-3'>
        <Image 
            src={`/assets/img/${imagen}.jpg`} 
            alt={`Imagen Platillo ${nombre}`} 
            width={450}
            height={500}
        />
        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{nombre}</h3>
            <p className='mt-5 font-black text-4xl text-ambe-500'>{formatDinero(precio)}</p>
            <button
              className='bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold rounded-lg'
              onClick={() => {
                handleSetProducto(producto)
                handleChangeModal()
              }}
            >
              Agregar
            </button>
        </div>
    </div>
  )
}

export default Producto