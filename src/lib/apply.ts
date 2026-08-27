// Careers applications are routed to email rather than a form backend: the
// Web3Forms free plan cannot carry file attachments, and applicants need to
// send a CV. Shared here so the address lives in one place.
export const APPLY_EMAIL = 'Shelterlink.pk@gmail.com';

interface ApplicationDetails {
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

/** Builds a mailto: link pre-filled with the applicant's details. */
export function buildApplicationMailto({
  jobTitle,
  name,
  email,
  phone,
  message,
}: ApplicationDetails): string {
  const body = [
    `Position: ${jobTitle}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    '',
    'Cover Note:',
    message.trim() || '—',
    '',
    '--',
    'Please attach your CV (PDF, DOC or DOCX) to this email before sending.',
  ].join('\n');

  const subject = `Job Application: ${jobTitle} — ${name}`;

  return `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
