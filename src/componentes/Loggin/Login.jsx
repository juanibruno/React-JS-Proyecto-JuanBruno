import { useContext, useState } from 'react'
import './login.css'
import { UserContext } from '../context/UserContext'


const Login = () => {

    const {acceso} = useContext(UserContext)

    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        acceso(values)
    } 
    return (
        <div className="login-conteiner ">
            <div className="p-8 bg-slate-200">   
            <h2 className="text-2xl font-semibold w-80 font-">Login</h2> 
            <hr />
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input className='border p-2' type='email' placeholder='Email' value={values.email} onChange={handleInputChange} name='email'/>
            <input className='border p-2' type='password' placeholder='Password' value={values.password} onChange={handleInputChange} name='password'/>
            <button type="submit" className="text-center text-zinc-800 py-2 font-semibold ">Ingresar</button>
            </form>

            </div>
        </div>
    )
}
export default Login;