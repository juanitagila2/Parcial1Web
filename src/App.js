import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import Menu from './components/menu';
import Stores from './components/stores';
import Cart from './components/cart';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Home /> : <LogIn onLoginSuccess={() => setIsAuthenticated(true)} />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/stores" element={<Stores />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;
