import './Main.css'
import photo from '../../assets/img/collina.jpeg'
import logotype from '../../assets/img/Снимок экрана 2022-05-02 в 14.13.24.png'
import { Link } from 'react-router-dom'
export const Main = () =>{
    return (
        <div>
            <section className='main-section'>
                <div className="first">
                    <h4>
                        Mystery Sale
                    </h4>
                    
                </div>
                <div className="second">
                    <h3>
                        $75 OFF $200+
                    </h3>
                </div>
                <div className="paragraph">
                    <p>
                    You choose your ending in this mystery story. What will your savings be? Get $15 off $75+, $25 off $100+, $50 off $150+ or $75 off $200+.
                    </p>
                </div>
                <div className="buttons">
                    <div className="buttons-inside">
                        <Link to='/shopmen'>
                            <button>
                                SHOP MEN
                            </button>
                        </Link>
                        <button>
                            SHOP WOMEN
                        </button>
                        <button>
                            SHOP KIDS
                        </button>
                        <button>
                            SHOP SALE
                        </button>
                    </div>
                </div>
                <div className="paragraph-2">
                    <p>
                    Online only. Auto-applied at checkout.
                    </p>
                </div>
            </section>
            <section className='block'>
                <div className="pic-block">
                    <div className="img-inside">
                        <img src={photo} alt="" />
                    </div>
                </div>
                <div className="text-block">
                    <div className="text-block-inside">
                        <div className="text-blockkk">
                            <div className="text-one">
                                <h4>
                                    The Drop
                                </h4>
                            </div>
                            <div className="text-two">
                                <h3>
                                    LEVI'S® X COLLINA STRADA
                                </h3>
                            </div>
                            <div className="text-three">
                                <p>
                                For Spring, we teamed up with Hillary Taymour and her brand and social platform Collina Strada on a bright, garden-inspired denim capsule collection.
                                </p>
                            </div>
                            <div className="text-four">
                                <span>
                                    <a href="/">
                                        EXPLORE THE COLLECTION
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="block-three">
                <div className="logotype">
                    <img src={logotype} alt="" />
                </div>
                <div className="join">
                    <h3>
                    JOIN THE RED TAB™ MEMBER PROGRAM FOR EXCLUSIVE PERKS
                    </h3>
                </div>
                <div className="membership">
                    <p>
                        Membership is free and open to all. Get free shipping on every order, exclusive access to product, a birthday gift and much, much more.
                    </p>
                </div>
                <div className="logging">
                    <a href="/">
                        <span>
                            Sign Up
                        </span>
                    </a>
                    <a href="/">
                        <span>
                            Log In
                        </span>
                    </a>
                </div>
            </section>

        </div>
    )
}