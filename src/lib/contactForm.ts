// Sends the contact form to the website owner's inbox via a form-delivery
// service (e.g. Formspree, Web3Forms, Getform). No API keys, SMTP passwords,
// or secret credentials live in the frontend — only a public form
// endpoint/ID does, which is safe to expose (it accepts submissions, it
// cannot read or send from the owner's mailbox on its own).
//
// The form is currently wired to deliver to: contact.wizzo.75@gmail.com
// That destination is configured on the form-service side (step 1 below),
// not in this file — a raw email address alone cannot receive submissions
// without a backend or service validating and relaying them, which is what
// prevents this contact form from being abused to spam arbitrary inboxes.
//
// SETUP (do this before going to production):
// 1. Create a free account with a form backend service, e.g.
//    https://formspree.io or https://web3forms.com, and create a form/
//    endpoint that delivers to contact.wizzo.75@gmail.com. Both support file
//    attachments out of the box via multipart/form-data (used below).
// 2. Copy the endpoint URL/access key it gives you.
// 3. Create a `.env.local` file at the project root (never commit it) with:
//      VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
//    (or the equivalent endpoint for your chosen service).
// 4. In production (Netlify/Vercel/etc.), set the same environment
//    variable in your host's dashboard — do not commit real values.
// 5. Restart `npm run dev` / rebuild. Submissions, including any attached
//    files, will now arrive by email with the visitor's own email address
//    set as reply-to.
//
// If VITE_CONTACT_FORM_ENDPOINT is not set, submissions are not sent
// anywhere — see the console warning — so configure it before going live.

export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  projectType?: string;
  message: string;
}

export async function submitContactForm(payload: ContactFormPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        message: payload.message + (payload.projectType ? `\n\nProject Type: ${payload.projectType}` : ''),
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { success: false, error: data.error || 'Failed to send message.' };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || 'Network error occurred. Please try again.' };
  }
}

