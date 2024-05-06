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
} from '@react-email/components';
import * as React from 'react';

interface CodeBasedTemplateProps {
  baseUrl: string;
  titleText: string;
  descriptionText: string;
  code: string;
}

export const CodeBasedTemplate = ({
  baseUrl,
  titleText,
  descriptionText,
  code: validationCode,
}: CodeBasedTemplateProps) => (
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

            <Section>
              <Section style={codeContainer}>
                <Text style={code}>{validationCode}</Text>
              </Section>
              <Text style={codeTimeText}>
                (This code is valid for 10 minutes)
              </Text>
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

CodeBasedTemplate.PreviewProps = {
  baseUrl: 'https://www.amazon.com',
  titleText: 'Did you log in from a new location or from a new device?',
  descriptionText:
    'You recently tried to log in to your Antik account from a new location or device. Review the details of that login attempt, and confirm that it was you.',
  code: 'H12J',
} as CodeBasedTemplateProps;

export default CodeBasedTemplate;

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

const codeContainer = {
  display: 'flex',
  justifyContent: 'center' as const,
  background: 'rgba(0,0,0,.05)',
  borderRadius: '4px',
  verticalAlign: 'middle',
  width: '280px',
};

const code = {
  color: '#000',
  display: 'inline-block',
  fontFamily: 'HelveticaNeue-Bold',
  fontSize: '32px',
  fontWeight: 700,
  letterSpacing: '6px',
  lineHeight: '40px',
  paddingBottom: '8px',
  paddingTop: '8px',
  margin: '0 auto',
  width: '100%',
  textAlign: 'center' as const,
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

const mainText = { ...text, marginBottom: '14px' };

const codeTimeText = { ...text, margin: '5px', textAlign: 'center' as const };

const cautionText = { ...text, margin: '0', color: '#AFAFAF' };
