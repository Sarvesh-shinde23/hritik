// pages/api/submitForm.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  stage: String,
  goal: String,
});

let Contact;
if (mongoose.models.Contact) {
  Contact = mongoose.model('Contact');
} else {
  Contact = mongoose.model('Contact', contactSchema);
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, stage, goal } = req.body;

    if (!name || !email || !phone || !stage || !goal) {
      return res.status(400).json({ message: 'Please fill all fields.' });
    }

    try {
      await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

      const newContact = new Contact({ name, email, phone, stage, goal });
      await newContact.save();

      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving to database.' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
