import AuthProvider from "@/providers/AuthProvider";

import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./RegisterForm";

const Register = () =>{
    return (
    <AuthProvider>
         <Container>
        <FormWrap>
            <RegisterForm/>
        </FormWrap>
    </Container>
    </AuthProvider>)
}

export default Register;