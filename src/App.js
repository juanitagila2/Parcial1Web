import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import GenericComponent from './components/GenericComponent'; // Importar el componente genérico
import messages_en from './locales/en.json';
import messages_es from './locales/es.json';

const messages = {
  en: messages_en,
  es: messages_es,
};

const language = navigator.language.split(/[-_]/)[0]; // Obtiene el idioma del navegador

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <IntlProvider locale={language} messages={messages[language]}>
            <Router>
                <Routes>
                    <Route path="/" element={isAuthenticated ? <Home /> : <LogIn onLoginSuccess={() => setIsAuthenticated(true)} />} />
                    <Route path="/menu" element={<GenericComponent titleKey="menu" />} />
                    <Route path="/stores" element={<GenericComponent titleKey="stores" />} />
                    <Route path="/cart" element={<GenericComponent titleKey="cart" />} />
                </Routes>
            </Router>
        </IntlProvider>
    );
}

export default App;
