import {
  Html,
  Body,
  Container,
  Img,
  Section,
  Text,
  Button,
  Link,
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
          <Section
            style={{
              paddingTop: "32px",
              paddingLeft: "12px",
              paddingRight: "12px",
            }}
          >
            <Img
              src="https://storage.yandexcloud.net/animalmore/emails/logo.png"
              width="289"
              height="71"
              alt="Animalmore"
            />

            <Heading as="h1" style={heading}>
              Восстановление пароля к вашему аккаунту
            </Heading>

            <Text style={text}>
              Вы запросили восстановление пароля. Чтобы установить новый пароль,
              нажмите на кнопку ниже.
            </Text>
            <Text style={{ ...text, marginBottom: 0 }}>
              Если вы не запрашивали сброс пароля,
            </Text>
            <Text style={{ ...text, margin: 0 }}>
              просто проигнорируйте это письмо — ваши данные в безопасности.
            </Text>

            <Button
              href="[ссылка]"
              style={{
                color: "white",
                borderRadius: "10px",
                backgroundColor: "#E9618C",
                padding: "12px 50px",
                marginTop: "32px",
                display: "inline-block",
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Сбросить пароль
            </Button>
            <Link
              style={{ marginTop: "20px", display: "block", color: "#344054" }}
              href="[ссылка]"
            >
              Или перейдите по ссылке:
            </Link>
            <Link
              style={{
                display: "block",
                textDecoration: "underline",
                color: "#344054",
              }}
              href="[ссылка]"
            >
              [ссылка]
            </Link>
          </Section>

          <Hr
            style={{
              borderColor: "#DFDFDF",
              marginTop: "64px",
            }}
          />

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  );
};

const container = {
  paddingTop: "40px",
  color: "#344054",
  margin: "0 auto",
};

const heading = {
  fontSize: "32px",
  fontWeight: "500",
  lineHeight: "38.4px",
  width: "360px",
  marginTop: "48px",
};

const text = {
  fontSize: "16px",
  lineHeight: "20px",
};

export default PasswordResetEmail;
