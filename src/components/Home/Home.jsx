import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import menuIcon from '../../assets/menu-icon.png';
import storesIcon from '../../assets/stores-icon.png';
import cartIcon from '../../assets/cart-icon.png';

export function Home() {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className='background'>
            <div className="container">
                <div className="item" onClick={() => navigateTo('/menu')}>
                    <img src={menuIcon} alt="Menu" className="menu-icon" />
                    <p className='title'>MENU</p>
                </div>
                <div className="item" onClick={() => navigateTo('/stores')}>
                    <img src={storesIcon} alt="Stores" className="menu-icon" />
                    <p className='title'>STORES</p>
                </div>
                <div className="item" onClick={() => navigateTo('/cart')}>
                    <img src={cartIcon} alt="Cart" className="menu-icon" />
                    <p className='title'>CART</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
