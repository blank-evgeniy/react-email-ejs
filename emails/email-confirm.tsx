import {
  Html,
  Body,
  Container,
  Section,
  Text,
  Button,
  Preview,
  Hr,
  Img,
} from "@react-email/components";
import { Header } from "./components/Header";
import { EmailFooter } from "./components/Footer";

export const baseUrl = "http://localhost:3001";

const EmailConfirmationEmail = () => {

  return (
    <Html lang="ru">
      <Header />
      <Preview>Подтверждение вашей почты</Preview>
      <Body>
        <Container style={container}>
          <Section>
            <Img 
              src="https://storage.yandexcloud.net/animalmore/emails/confirm-email/v1/banner.png"
              alt="Подтверждение электронной почты"
              width={'100%'}
              height={'auto'}
            />

            <Text style={text} >
              Для того, чтобы завершить регистрацию и перейти в Личный Кабинет - подтвердите свою электронную почту
            </Text>
            <Button href="[ссылка]" style={{ ...buttonStyle, textAlign: 'center' }}>
              Подтвердить электронную почту
            </Button>
          </Section>

          <Hr
            style={{
              borderColor: "#D9D9D9",
              marginTop: "40px",
            }}
          />

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  );
};

const container = {
  maxWidth: "790px",
  margin: "0 auto",
  color: "#61666F",
  borderRadius: '6px',
};

const text = {
  fontSize: "20px",
  lineHeight: "32px",
  margin: "20px 0",
};

const buttonStyle = {
  display: "inline",
  padding: "10px 32px",
  color: "white",
  borderRadius: "6px",
  backgroundColor: "#7DB21B",
  fontSize: "18px",
  lineHeight: '20px',
  fontWeight: "400",
};

export default EmailConfirmationEmail;
