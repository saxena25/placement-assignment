import { useState } from 'react';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const[isMegaMenu, setIsMegaMenu] = useState(false);
    const navigate = useNavigate();

    const handleToggle = () =>{
        setIsMegaMenu(!isMegaMenu);
    }

    return ( 
        <>
            <nav className='navbar'>
                <div className='left-navbar'>Navbar</div>
                <div className='right-navbar'>
                    <button onClick={()=>navigate('/')} className='nav-btn'>Home</button>
                    <button onClick={()=>navigate('/signup')} className='nav-btn'>SignUp</button>
                    <ul className='main-ul'>
                        <li>Menu</li>
                        <li>Clothes</li>
                        <li onMouseEnter={handleToggle} onMouseLeave={handleToggle} className='hover-li'>Hover Here...
                            {isMegaMenu ? (
                                <div className='megaMenu'>
                                    <div className='sub-megaMenu'>
                                        <h3>Bikes</h3>
                                        <div className='megaMenu-ul'> 
                                            <p>Yezdi Adventure</p>
                                            <p>Honda CBR650f</p>
                                            <p>Kawasaki Ninja 300</p>
                                        </div>
                                    </div>
                                    <div className="sub-megaMenu">
                                        <h3>Cars</h3>
                                        <div className='megaMenu-ul'>
                                            <p>Tata Tiago</p>
                                            <p>Tata Cruv</p>
                                            <p>Tata Harrier</p>
                                        </div>
                                    </div>
                                </div>
                            ): null}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
     );
}

export default Navbar;