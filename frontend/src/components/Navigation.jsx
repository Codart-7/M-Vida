import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import '../styles/Navigation.css'

const Navigation = ({loginState, handleLoginState}) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const navigate = useNavigate()

    const changeColor = () => {
        if (window.scrollY >= 100) {
        setColor(true);
        } else {
        setColor(false);
        }
    };

    const handleBtn = () => {
        handleClick()
        if (loginState) {
            handleLoginState(false)
            navigate('/')
        } else {
            navigate('/signin')
        }
    }
    window.addEventListener("scroll", changeColor);


    return (
        <header>
        {/* <div className={`flex justify-between items-center p-4 fixed w-full h-[90px] z-10 duration-500 max-w-5xl lg:left-[20%] ${color ? "bg-black/[0.85]" : "bg-white"}`}> */}
        <div className={`flex justify-between items-center p-4 fixed w-full h-[90px] z-10 duration-500  ${color ? "bg-black/[0.85]" : "bg-white"}`}>
            <Link to="/">
                <h1 className={`text-2xl md:4xl lg:text-[2rem] ${color && 'text-white'}`}>M-vida</h1>
            </Link>

            <ul className={`
                flex flex-col items-center justify-center bg-black/90
                w-full h-[100vh] absolute top-0 left-[-100%] z-[-3]
                duration-300 lg:left-0 lg:h-auto lg:bg-inherit  
                lg:static lg:flex-row lg:w-auto ${click && "left-0"}`}
            >
            <li 
                className={`py-4 text-white text-xl lg:py-0 lg:mx-2 lg:text-black ${color && "lg:text-white bg-black/90"}`}
                onClick={handleClick}
            >
                <Link to="/">Home</Link>
            </li>
            {
                loginState &&
                <li 
                    className={`py-4 text-white text-xl lg:py-0 lg:mx-2 lg:text-black ${color && "lg:text-white"}`}
                    onClick={handleClick}
                >
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            }

            <li 
                className={`py-4 text-white text-xl lg:py-0 lg:mx-2 lg:text-black ${color && "lg:text-white"}`}
                onClick={handleClick}
            >
                <Link to="/drug-md">Drug-MD</Link>
            </li>

            {/* <li 
                className={`py-4 text-white text-xl lg:py-0 lg:mx-2 lg:text-black ${color && "lg:text-white"}`}
                onClick={handleClick}
            >
                <Link to="/contact">tab-c</Link>
            </li> */}
            <li>
                <button 
                    className={`bg-black rounded-md py-2 px-6 text-white ${color && "bg-white text-black"}`}
                    onClick={handleBtn}
                >
                    {loginState ? "logout" : "Sign in"}
                </button>
                {/* <Link to={loginState ? "/signin" : "/logout"}>

                </Link> */}
            </li>
            </ul>

            <div className="lg:hidden" onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
                <FaBars size={20} style={ color ? { color: "#fff" } : { color : "#000"}} />
            )}
            </div>
        </div>
        </header>
    )
}

export default Navigation