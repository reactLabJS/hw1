import logoImage from '../../assets/img/logo.svg'
import './Header.css'
export const Header = () =>{
    return (
        <div className='header'>
            <div className="logo">
                <img src={logoImage} alt="" />
            </div>
            <div className="menu">
            <a href="/">About</a>
            <a href="/">Products</a>
            <a href="/">Pricing</a>
            </div>
            <div className="logg">
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}