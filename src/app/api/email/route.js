const nodemailer = require('nodemailer')
const { google } = require('googleapis')
import EmailTemplate from '../../../components/EmailTemplate'

// the below line is as per documentation
export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(req) {
  const ReactDOMServer = (await import('react-dom/server')).default
  const { name, email, subject, phone, message } = await req.json()

  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  })

  const accessToken = await oauth2Client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MY_EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  })

  const receiverEmailOptions = {
    to: `Cyntronex <${process.env.MY_EMAIL}>`,
    subject: `[Cyntronex Website] - ${email} - ${name} - ${subject} ${
      phone && `- ${phone}`
    }`,
    text: message,
  }
  const emailTemplate = <EmailTemplate name={name} />
  const htmlTemplate = ReactDOMServer.renderToStaticNodeStream(emailTemplate)

  const senderEmailOptions = {
    to: email,
    subject: `Cyntronex - Thank You for Contacting us`,
    html: htmlTemplate,
  }

  try {
    const recieverEmail = await transporter.sendMail(receiverEmailOptions)
    console.log('Email recieved:', recieverEmail.response)
    const senderEmail = await transporter.sendMail(senderEmailOptions)
    console.log('Email sent:', senderEmail.response)
    return new Response(
      JSON.stringify({
        message: 'Email sent successfully',
      })
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ error: 'Email sending failed' }))
  }
}
