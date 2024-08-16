import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

// Create a schema for the contact form
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const newContact = new Contact(req.body);
      await newContact.save();
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting form', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}