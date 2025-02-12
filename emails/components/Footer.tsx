import { Column, Img, Link, Row, Section, Text } from "@react-email/components";

export function EmailFooter() {
  return (
    <Section style={{ paddingLeft: "12px", paddingRight: "12px" }}>
      <Row
        style={{
          paddingTop: "24px",
          marginBottom: "40px",
          borderColor: "#DFDFDF",
          borderTop: "1px",
        }}
      >
        <Column style={{ width: "100%", paddingRight: "16px" }}>
          <Text
            style={{ width: "320px", fontSize: "16px", lineHeight: "20px" }}
          >
            © 2020 – 2024 Сервис подбора питомцев ООО «Энималмор».
          </Text>
        </Column>
        <Column>
          <Link href="/">
            <Img
              style={{ display: "inline", marginLeft: "12px" }}
              src="https://storage.yandexcloud.net/animalmore/emails/tg.png"
              width="36"
              height="36"
              alt="Телеграм"
            />
          </Link>
        </Column>
        <Column>
          <Link href="/">
            <Img
              style={{ display: "inline", marginLeft: "12px" }}
              src="https://storage.yandexcloud.net/animalmore/emails/vk.png"
              width="36"
              height="36"
              alt="Вконтакте"
            />
          </Link>
        </Column>
      </Row>
    </Section>
  );
}
