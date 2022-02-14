import { createContact } from "../_util/hubspot";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      await createContact(email);

      return res.status(201).json({});
    } catch (e) {
      return res.status(e.statusCode).json({ error: e });
    }
  }

  res.status(404).json({});
}
