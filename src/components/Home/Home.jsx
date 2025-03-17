import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import './Home.css';
import menuIcon from '../../assets/menu-icon.png';
import storesIcon from '../../assets/stores-icon.png';
import cartIcon from '../../assets/cart-icon.png';

export function Home() {
    const navigate = useNavigate();
    const intl = useIntl();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className='background'>
            <div className="container">
                <div className="item" onClick={() => navigateTo('/menu')}>
                    <img src={menuIcon} alt="Menu" className="menu-icon" />
                    <p className='title'>{intl.formatMessage({ id: 'menu' })}</p>
                </div>
                <div className="item" onClick={() => navigateTo('/stores')}>
                    <img src={storesIcon} alt="Stores" className="menu-icon" />
                    <p className='title'>{intl.formatMessage({ id: 'stores' })}</p>
                </div>
                <div className="item" onClick={() => navigateTo('/cart')}>
                    <img src={cartIcon} alt="Cart" className="menu-icon" />
                    <p className='title'>{intl.formatMessage({ id: 'cart' })}</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
