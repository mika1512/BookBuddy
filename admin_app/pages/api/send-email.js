import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, title, content } = req.body;

    try {
      const response = await resend.emails.send({
        from: 'no-reply@booksbuddyhello.online', // Use your verified sender email
        to: email,
        subject: title,
        html: `<p>${content}</p>`, // Use HTML content
      });

      console.log('Resend response:', response); // Log the response

      res.status(200).json({ message: `Email sent successfully to ${email}` });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
