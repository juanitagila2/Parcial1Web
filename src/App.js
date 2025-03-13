import { useState } from 'react';
import SignIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import Menu from './components/menu'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div>
             {isAuthenticated ? <Home /> : <SignIn onLoginSuccess={() => setIsAuthenticated(true)} />}
             
        </div>
    );
}

export default App;
