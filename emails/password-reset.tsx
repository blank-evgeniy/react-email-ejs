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

const PasswordResetEmail = () => {
  return (
    <Html lang="ru">
      <Header />
      <Preview>Восстановление пароля к вашему аккаунту</Preview>
      <Body>
        <Container style={container}>
          <Section>
            <Section
              style={{
                color: 'white',
                backgroundSize: 'fill',
                backgroundRepeat: 'no-repeat',
                backgroundImage: "url(https://storage.yandexcloud.net/animalmore/emails/banner_password_reset.png)",
              }}
            >
              <Section style={{
                position: 'relative',
                borderRadius: '24px',
                backgroundColor: '#CCD356',
                zIndex: '-1'
              }}>
                <Heading as="h1" style={heading}>
                  ВОССТАНОВЛЕНИЕ ПАРОЛЯ
                </Heading>
              </Section>
            </Section>

            <Text style={text} >
              Чтобы установить новый пароль, нажмите на кнопку ниже
            </Text>
            <Button href="[ссылка]" style={{ ...buttonStyle, textAlign: 'center' }}>
              Сбросить пароль
            </Button>
            <Text
              style={{
                marginTop: '25px',
                fontSize: '14px',
                lineHeight: '125%',
                textDecoration: 'underline',
                color: '#3F3F3F80',
              }}
            >
              Если вы не запрашивали сброс пароля, просто проигнорируйте это письмо
            </Text>
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
  maxWidth: '380px',
  margin: "50px 30px",
  fontWeight: "400",
  fontSize: "28px",
  lineHeight: "30px",
  zIndex: '-1'
};

const text = {
  fontSize: "20px",
  lineHeight: "32px",
  marginTop: "25px",
  marginBottom: "20px"
};

const buttonStyle = {
  display: "inline-block",
  padding: "10px 32px",
  color: "white",
  borderRadius: "6px",
  backgroundColor: "#7DB21B",
  lineHeight: '32px',
  fontSize: "22px",
  fontWeight: "400",
};

export default PasswordResetEmail;
