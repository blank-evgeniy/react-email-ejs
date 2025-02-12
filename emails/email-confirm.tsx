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

const EmailConfirmationEmail = () => {
  return (
    <Html lang="ru">
      <Header />
      <Preview>Подтверждение вашей почты</Preview>
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
              Подтверждение вашей электронной почты
            </Heading>

            <Text style={text}>
              Вы запросили подтверждение вашей электронной почты для аккаунта на
              AnimalMore. Чтобы завершить процесс, нажмите на кнопку ниже:
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
              Подтвердить почту
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

export default EmailConfirmationEmail;
