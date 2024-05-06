import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Hr,
  Section,
  Text,
  Button,
} from '@react-email/components';
import * as React from 'react';

interface ButtonBasedTemplateProps {
  baseUrl: string;
  titleText: string;
  descriptionText: string;
  buttonText: string;
  buttonLink: string;
}

export const ButtonBasedTemplate = ({
  baseUrl,
  titleText,
  descriptionText,
  buttonText,
  buttonLink,
}: ButtonBasedTemplateProps) => (
  <Html>
    <Head />
    <Preview>AWS Email Verification</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={coverSection}>
          <Section style={imageSection}>
            <Img
              src={`https://static.tildacdn.com/tild3933-3931-4630-b536-653134306264/logo-60px.svg`}
              alt="Antik Browser Logo"
            />
          </Section>
          <Section style={upperSection}>
            <Heading style={h1}>{titleText}</Heading>
            <Text style={mainText}>{descriptionText}</Text>
            <Section style={verificationSection}>
              <Button style={button} href={buttonLink}>
                {buttonText}
              </Button>
            </Section>
          </Section>
          <Hr />
          <Section style={lowerSection}>
            <Text style={cautionText}>
              This email is auto-generated and does not require a reply.
            </Text>
            <Text style={cautionText}>
              If you have any questions, please{' '}
              <Link style={link} href="https://t.me/antik_support">
                Contact our technical support in Telegram
              </Link>
            </Text>
          </Section>
        </Section>
        <Text style={footerText}>
          This message was produced and distributed by DWS LLC, Inc., Georgia,
          Tbilisi, Saburtalo district, Vazha-Pshavela ave, N76, flat 83a. © 2024{' '}
          <Link href="https://antik-browser.com" target="_blank" style={link}>
            Antik Browser
          </Link>
          .
        </Text>
      </Container>
    </Body>
  </Html>
);

ButtonBasedTemplate.PreviewProps = {
  baseUrl: 'https://www.amazon.com',
  titleText: 'Confirm Your Email',
  descriptionText:
    "You're one step away from registration! In order for us to activate your account, you need to confirm your e-mail. Then, you'll be able to use our product with no worries.",
  buttonText: 'Confirm',
  buttonLink: 'https://google.com',
} as ButtonBasedTemplateProps;

export default ButtonBasedTemplate;

const main = {
  backgroundColor: '#fff',
  color: '#212121',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  padding: '20px',
  margin: '0 auto',
  backgroundColor: '#eee',
};

const h1 = {
  color: '#333',
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const link = {
  color: '#2754C5',
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontSize: '14px',
  margin: '24px 0',
};

const button = {
  color: '#202024',
  backgroundColor: '#f6c20a',
  borderRadius: '6px',
  fontWeight: '600',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '11px 23px',
};

const imageSection = {
  backgroundColor: '#202024',
  display: 'flex',
  padding: '20px 0',
  alignItems: 'center',
  justifyContent: 'center',
};

const coverSection = { backgroundColor: '#fff' };

const upperSection = { padding: '25px 35px' };

const lowerSection = { padding: '15px 35px' };

const footerText = {
  ...text,
  fontSize: '12px',
  padding: '0 20px',
};

const verificationSection = {};

const mainText = { ...text, marginBottom: '14px' };

const cautionText = { ...text, margin: '0', color: '#AFAFAF' };
