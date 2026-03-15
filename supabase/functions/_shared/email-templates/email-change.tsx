/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface EmailChangeEmailProps {
  siteName: string
  email: string
  newEmail: string
  confirmationUrl: string
}

const LOGO_URL = 'https://ociiupomlowzlpmmuiyt.supabase.co/storage/v1/object/public/email-assets/buildrs-logo.png'

export const EmailChangeEmail = ({
  siteName,
  email,
  newEmail,
  confirmationUrl,
}: EmailChangeEmailProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Confirme ton changement d'email pour {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={LOGO_URL} alt="Buildrs" width="120" height="auto" style={{ marginBottom: '24px' }} />
        <Heading style={h1}>Confirme ton changement d'email</Heading>
        <Text style={text}>
          Tu as demandé à changer ton email pour {siteName} de{' '}
          <Link href={`mailto:${email}`} style={link}>
            {email}
          </Link>{' '}
          vers{' '}
          <Link href={`mailto:${newEmail}`} style={link}>
            {newEmail}
          </Link>
          .
        </Text>
        <Text style={text}>
          Clique ci-dessous pour confirmer :
        </Text>
        <Button style={button} href={confirmationUrl}>
          Confirmer le changement →
        </Button>
        <Text style={footer}>
          Si tu n'as pas fait cette demande, sécurise ton compte immédiatement.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default EmailChangeEmail

const main = { backgroundColor: '#080909', fontFamily: "'Geist', Arial, sans-serif" }
const container = { padding: '40px 32px', maxWidth: '480px', margin: '0 auto' }
const h1 = {
  fontSize: '22px',
  fontWeight: '600' as const,
  color: '#EDEEEF',
  margin: '0 0 20px',
  letterSpacing: '-0.02em',
}
const text = {
  fontSize: '14px',
  color: '#8a8a8a',
  lineHeight: '1.6',
  margin: '0 0 24px',
}
const link = { color: '#EDEEEF', textDecoration: 'underline' }
const button = {
  backgroundColor: '#EDEEEF',
  color: '#080909',
  fontSize: '14px',
  fontWeight: '600' as const,
  borderRadius: '8px',
  padding: '12px 24px',
  textDecoration: 'none',
}
const footer = { fontSize: '12px', color: '#555', margin: '32px 0 0', borderTop: '1px solid #1a1a1a', paddingTop: '16px' }
