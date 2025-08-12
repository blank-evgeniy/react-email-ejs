import {
  Html,
  Body,
  Container,
  Section,
  Text,
  Button,
  Preview,
  Heading,
  Hr,
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
            <Section
              style={{
                color: 'white',
                backgroundSize: 'fill',
                backgroundRepeat: 'no-repeat',
                backgroundImage: "url(https://storage.yandexcloud.net/animalmore/emails/banner_email_confirm.png)",
              }}
            >
              <Section style={{
                position: 'relative',
                borderRadius: '24px',
                backgroundColor: '#CCD356',
                zIndex: '-1'
              }}>
                <Heading as="h1" style={heading}>
                  ПОДТВЕРЖДЕНИЕ ЭЛЕКТРОННОЙ ПОЧТЫ
                </Heading>
              </Section>
            </Section>

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

const heading = {
  maxWidth: '450px',
  margin: "50px 30px",
  fontWeight: "400",
  fontSize: "30px",
  lineHeight: "32px",
};


const text = {
  fontSize: "20px",
  lineHeight: "32px",
  marginTop: "25px",
  marginBottom: "20px"
};

const buttonStyle = {
  padding: "10px 32px",
  color: "white",
  borderRadius: "6px",
  backgroundColor: "#7DB21B",
  lineHeight: '32px',
  fontSize: "22px",
};

export default EmailConfirmationEmail;
