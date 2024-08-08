import { useEffect } from 'react'
import './navbar.css'


const Nav = ()=>{
    

    useEffect(()=>{

        const handleScroll = ()=>{

            const navBar = document.querySelector('.navbar')
            if(window.scrollY > 50){
                navBar?.classList.add('scrolled')
            } else {
                navBar?.classList.remove('scrolled')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent position-fixed w-100 z-2 shadow">
            <div className="container-fluid">
                <div className="d-flex justify-content-evenly align-items-center w-100">
                    <div>
                        <span className="text-light h4 mb-0">
                            Devan. P. S
                        </span>
                    </div>
                    <div>
                        <ul className="text-light list-unstyled d-flex mt-3">
                            <li className="mx-3">Home</li>
                            <li className="mx-3">Projects</li>
                            <li className="mx-3">About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav