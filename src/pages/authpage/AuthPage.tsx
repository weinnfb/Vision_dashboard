import { useState } from "react";
import { AuthLayout } from "../../layout/AuthLayout";
import LoginForm from "../logIn/logInForm";
import SignUpForm from "../signUp/signUoForm";
import Container from "../../components/Container";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <AuthLayout>
            <Container>
                {isLogin ? (
                    <LoginForm onSwitch={() => setIsLogin(false)} />
                ) : (
                    <SignUpForm onSwitch={() => setIsLogin(true)} />
                )}
            </Container>
        </AuthLayout>
    );
}