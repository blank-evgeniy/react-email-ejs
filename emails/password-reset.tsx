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

const PasswordResetEmail = () => {
  return (
    <Html lang="ru">
      <Header />
      <Preview>Восстановление пароля к вашему аккаунту</Preview>
      <Body>
        <Container style={container}>
          <Section>
            <Img 
              src="https://storage.yandexcloud.net/animalmore/emails/reset-password/v1/banner.png"
              alt="Восстановление пароля"
              width={'100%'}
              height={'auto'}
            />

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

export default PasswordResetEmail;
