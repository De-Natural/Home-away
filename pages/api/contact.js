import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, phone, subject, message } = req.body;

    // Validate
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "Please fill in all required fields." });
    }

    try {
        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>", // NOTE: Change this later after domain verification
            to: [process.env.CONTACT_EMAIL],
            subject: `Contact Form: ${subject}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return res.status(400).json({ message: "Failed to send email via Resend.", error });
        }

        return res.status(200).json({ message: "Email sent successfully!", data });
    } catch (error) {
        console.error("Internal Server Error:", error);
        return res.status(500).json({ message: "An unexpected error occurred. Please try again later." });
    }
}
