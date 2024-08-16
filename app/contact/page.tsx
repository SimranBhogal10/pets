import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import ContactForm from "./ContactForm";

const ContactPage = () =>{
    return (<Container>
        <FormWrap>
            <ContactForm />
        </FormWrap>
    </Container>)
}

export default ContactPage;