import type { formSchemaType } from "@/lib/types";

import {
  Html,
  Container,
  Head,
  Font,
  Heading,
  Hr,
  Text,
} from "@react-email/components";

export default function EmailTemplate({
  name,
  phone,
  message,
  email,
}: formSchemaType) {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Container>
        <Heading as="h1">
          {name}/{email}
        </Heading>
        <Hr />
        <Text>{message}</Text>
        <Text>Phone Number: {phone}</Text>
      </Container>
    </Html>
  );
}
