import { Column, Img, Link, Row, Section, Text } from "@react-email/components";

export function EmailFooter() {
  return (
    <Section style={{ marginTop: '18px' }}>
      <Row>
        <Column style={{ width: "100%", color: '#7DB21B'}}>
          <Text
            style={{ width: "210px", fontSize: "12px", lineHeight: "125%", margin: '0' }}
          >
            © 2020 – 2025  ООО «Энималмор». Все права защищены.
          </Text>
        </Column>
        <Column>
          <Link href="/">
            <Img
              style={{ display: "inline", marginLeft: "12px" }}
              src="https://storage.yandexcloud.net/animalmore/emails/social/v1/tg.webp"
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
              src="https://storage.yandexcloud.net/animalmore/emails/social/v1/vk.webp"
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
