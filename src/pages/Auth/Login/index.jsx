import { useState } from 'react'
import escudo from '@/assets/images/escudo.png'
import InputIcon from '@/components/InputIcon'
import { FaAddressCard, FaLock } from 'react-icons/fa6'

function Login () {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className='flex justify-center items-center h-screen'>
      <div className='m-4 md:m-2 flex flex-col gap-4 w-80'>
        <h1 className='flex justify-center items-center'>
          <img src={escudo} alt='Siian' className='w-44' />
        </h1>

        <div className='bg-white flex flex-col gap-4 p-4 md:p-6 shadow-lg rounded-2xl'>
          <form>
            <h2 className='text-2xl font-bold text-center'>Iniciar sesión</h2>

            <div className='my-4 flex flex-col flex-nowrap gap-2'>
              <InputIcon
                value={user}
                setValue={setUser}
                label='Usuario'
                placeholder='Ingresa tu usuario'
                icon={FaAddressCard}
              />

              <InputIcon
                value={password}
                setValue={setPassword}
                label='Clave'
                placeholder='Ingresa tu clave'
                icon={FaLock}
              />
            </div>

            <button
              type='submit'
              className='bg-slate-800 text-white font-semibold rounded-lg py-2 w-full hover:bg-slate-900 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login
