import { useState } from 'react';
import { Button, Input, Form, Alert, Card } from '@heroui/react';
import './LogIn.css';
import logo from '../../assets/logo.png';
import loginImage from '../../assets/salad.png';

export function LogIn({ onLoginSuccess }) {
    const [submitted, setSubmitted] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    const [username, setUserName] = useState("");
    const [usernameError, setUserNameError] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const validarContrasena = (password) => password.length >= 5 && password.length <= 8;

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(validarContrasena(value) ? null : "La contraseña debe tener minimo 5 y maximo 8 caracteres.");
    };

    const handleUserNameChange = (e) => {
        const value = e.target.value;
        setUserName(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username || usernameError || !password || passwordError) {
            alert("Corrige los errores antes de enviar el formulario.");
            return;
        }
        setSubmitted({ username, password });
        setShowAlert(true);

        setTimeout(() => {
            onLoginSuccess(); // Cambia la vista en App.js
        }, 1500);
    };

    return (
        <div className='bg-container'>
            <Card className="card2-right ">
                <img className="logo" src={logo} alt="Logo" style={{ width: '40%', padding: '10px' }} />
                <img className="login" src={loginImage} alt="Login" style={{ width: '80%', padding: '10px' }} />
            </Card>
            <Card className="card2">
                <div className="flex flex-col justify-center items-center">
                    <Form className="text w-full mt-4" onSubmit={onSubmit}>
                        <Input
                            className="text w-full mb-7"
                            isRequired
                            isInvalid={!!usernameError}
                            errorMessage={usernameError}
                            label="Username"
                            labelPlacement="outside"
                            name="Username"
                            placeholder="Ingresa tu usuario"
                            type="Username"
                            value={username}
                            onChange={handleUserNameChange}
                            labelClassName="input-label" 
                        />
                        <Input
                            className="text w-full mb-7"
                            isRequired
                            isInvalid={!!passwordError}
                            errorMessage={passwordError}
                            label="Contraseña"
                            labelPlacement="outside"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            labelClassName="input-label" 
                        />
                        <Button className="button-primary w-full mb-7" type="submit">
                            Log In
                        </Button>
                    </Form>
                    {showAlert && (
                        <Alert color="success" description="Log in exitoso!" onClose={() => setShowAlert(false)} />
                    )}
                </div>
            </Card>
        </div>
    );
}

export default LogIn;
