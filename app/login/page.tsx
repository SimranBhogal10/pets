import AuthProvider from "@/providers/AuthProvider";

import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginForm from "./LoginForm";

const Login = () =>{
return <AuthProvider>
    <Container>
        <FormWrap>
            <LoginForm />
        </FormWrap>
    </Container>
</AuthProvider>
}

export default Login;