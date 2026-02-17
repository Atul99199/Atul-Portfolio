import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:atulald97@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:atulald97@gmail.com">atulald97@gmail.com</a>
        </div>
        <div>
        <a href="tel:+9919497824"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+9919497824">(+91) 9919497824</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}