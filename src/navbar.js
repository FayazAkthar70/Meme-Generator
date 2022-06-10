import Navlogo from './nav-logo.png' 

export default function Navbar () {
    return (
        <nav className="navbar navbar-dark bg-dark ">
        <div className='container-fluid d-flex justify-content-between'>
            <div >
                <a className="navbar-brand" href="#">
                <img src={Navlogo} alt="" width="80" height="80" className="d-inline-block align-text-center"/>
                Meme Generator
                </a>
            </div>
            <div className='mx-5 text-white '>
                React Course Project 3
            </div>
        </div>

        </nav>
    )
}