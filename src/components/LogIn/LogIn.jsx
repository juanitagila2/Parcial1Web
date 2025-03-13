import { useState } from 'react';
import { Button, Input, Form, Alert, Card} from '@heroui/react';
import './LogIn.css';
import '../../assets/logo.png';
export function SignIn({ onLoginSuccess }) {
    const [submitted, setSubmitted] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    const [username, setUserName] = useState("");
    const [usernameError, setUserNameError] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const validarContrasena = (password) => password.length >= 8;

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(validarContrasena(value) ? null : "La contraseña debe tener al menos 8 caracteres.");
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
        <div className='flex justify-center items-center'>
            <Card className="card2">
                <img className= "logo"/>
                <img className= "login"/>

            </Card>
            <Card className="card2">
                <div className="flex flex-col justify-center items-center">
                    <Form className="w-full mt-4" onSubmit={onSubmit}>
                        <Input
                            className="w-full mb-7"
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
                        />
                        <Input
                            className="w-full mb-7"
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

export default SignIn;
