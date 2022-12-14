import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = ({handleLoginState}) => {
  const navigate = useNavigate()
  const [tab, setTab] = useState(1)
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  })

    const handleChange = (e, setChange) => {
    const {name, value} = e.target
    setChange(prevState => ({
      ...prevState,
      [name] : value
    }))
  }

  const switchTab = (val) => {
    if (val !== tab) {
      setTab(val)
      setLoginData({
        username: '',
        password: ''
      })
      setSignUpData({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
      })
    }
  }

  const handleBtn = () => {
    if (tab === 1) {
      handleLoginState(true)
      navigate('/dashboard')
    }
  }
  return (
    <div className='pt-24 mx-auto'>
      <div className='w-10/12 max-w-md mx-auto rounded-md'>
        <ul className='flex w-full'>
          <li 
            className={`w-6/12 px-6 py-3  rounded-tl-lg  cursor-pointer ${ tab === 1 ? "bg-slate-800" :  "bg-slate-100" }`}
            onClick={()=> switchTab(1)}
          >
            <p className={`text-center ${tab === 1 ? "text-white" : "text-slate-700"}`}>Login</p>
          </li>
          <li 
            className={`w-6/12 px-6 py-3  rounded-tr-lg  cursor-pointer ${ tab === 2 ? "bg-slate-800" :  "bg-slate-100" }`}
            onClick={()=> switchTab(2)}
          >
            <p className={`text-center ${tab === 2 ? "text-white" : "text-slate-700"}`}>Sign Up</p>
          </li>
        </ul>
        <form
          className='bg-slate-800 rounded-b-lg py-4 flex justify-center'
        >
          <div className='w-10/12 flex flex-col gap-4'>
            {
              tab === 1 ? (
                <>
                <label className='w-full text-white'>Username
                  <input
                    type={'text'}
                    className="rounded-sm p-1 w-full text-slate-600 outline-none"
                    placeholder='JohnDoe24'
                    name='username'
                    value={loginData.username}
                    onChange={(e) => handleChange(e, setLoginData)}
                  />
                </label>
                <label className='w-full text-white'>Password
                  <input
                    type={'password'}
                    className="rounded-sm p-1 w-full text-slate-600 outline-none"
                    placeholder='preetyPr!ngles'
                    name='password'
                    value={loginData.password}
                    onChange={(e) => handleChange(e, setLoginData)}
                  />
                </label>
                </>
              ) : (
                <>
                  <label className='w-full text-white'>First Name
                    <input
                      type={'text'}
                      className="rounded-sm p-1 w-full text-slate-600 outline-none"
                      placeholder='John'
                      name='firstName'
                      value={signUpData.firstName}
                      onChange={(e) => handleChange(e, setSignUpData)}
                    />
                  </label>
                  <label className='w-full text-white'>Last Name
                    <input
                      type={'text'}
                      className="rounded-sm p-1 w-full text-slate-600 outline-none"
                      placeholder='Doe'
                      name='lastName'
                      value={signUpData.lastName}
                      onChange={(e) => handleChange(e, setSignUpData)}
                    />
                  </label>
                  <label className='w-full text-white'>Username
                    <input
                      type={'text'}
                      className="rounded-sm p-1 w-full text-slate-600 outline-none"
                      placeholder='JohnDoe24'
                      name='username'
                      value={signUpData.username}
                      onChange={(e) => handleChange(e, setSignUpData)}
                    />
                  </label>
                  <label className='w-full text-white'>Email
                    <input
                      type={'email'}
                      className="rounded-sm p-1 w-full text-slate-600 outline-none"
                      placeholder='JohnDoe24@gmail.com'
                      name='email'
                      value={signUpData.email}
                      onChange={(e) => handleChange(e, setSignUpData)}
                    />
                  </label>
                  <label className='w-full text-white'>Password
                    <input
                      type={'password'}
                      className="rounded-sm p-1 w-full text-slate-600 outline-none"
                      placeholder='preetyPr!ngles'
                      name='password'
                      value={signUpData.password}
                      onChange={(e) => handleChange(e, setSignUpData)}
                    />
                  </label>
                  <label className='w-full text-white'>Confirm Password
                    <input
                      type={'password'}
                      className="rounded-sm p-1 w-full text-slate-600 outline-none"
                      placeholder='preetyPr!ngles'
                      name='confirmPassword'
                      value={signUpData.confirmPassword}
                      onChange={(e) => handleChange(e, setSignUpData)}
                    />
                  </label>
                </>
              )
            }
            <button
              className='w-20 bg-white rounded-sm px-2 py-1 my-4'
              onClick={handleBtn}
            >
              {tab === 1 ? "login" : "continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn