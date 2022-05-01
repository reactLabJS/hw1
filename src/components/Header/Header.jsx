import logoImage from '../../assets/img/levi.svg'
import './Header.css'
export const Header = () =>{
    return (
        <div className='header'>
            <div className="menu">
                <li>
                    <a href="/">SHOP</a>
                </li>
                <li>
                    <a href="/">CUSTOM</a>
                </li>
                <li>
                    <a href="/">DISCOVER</a>
                </li>
                <li>
                    <a href="/">SECONDHAND</a>
                </li>
                
            </div>
            <div className="logo">
                <img src={logoImage} alt="" />
            </div>
            <div className="search">
                <input className='searching' type="text" placeholder='What are you looking for?' />
            </div>
        </div>
    
    )
}