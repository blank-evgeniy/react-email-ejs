import { Font, Head } from "@react-email/components";

export function Header() {
  return (
    <Head>
      <Font
        fontFamily="Nunito"
        fallbackFontFamily="Arial"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
  );
}
