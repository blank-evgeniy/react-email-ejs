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
        <Column style={{ paddingLeft: "12px"}}>
          <Link href="https://t.me/animalmore">
            <Img
              style={{ display: "inline" }}
              src="https://storage.yandexcloud.net/animalmore/emails/social/v1/tg.png"
              width={36}
              height={36}
              alt="Телеграм"
            />
          </Link>
        </Column>
        <Column style={{ paddingLeft: "12px"}}>
          <Link href="https://vk.com/animalmore">
            <Img
              style={{ display: "inline" }}
              src="https://storage.yandexcloud.net/animalmore/emails/social/v1/vk.png"
              width={36}
              height={36}
              alt="Вконтакте"
            />
          </Link>
        </Column>
      </Row>
    </Section>
  );
}
