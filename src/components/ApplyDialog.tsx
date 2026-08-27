import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { APPLY_EMAIL, buildApplicationMailto } from '@/lib/apply';
import { Mail, Paperclip } from 'lucide-react';

interface ApplyDialogProps {
  jobTitle: string;
  triggerClassName?: string;
  triggerLabel?: string;
}

export default function ApplyDialog({
  jobTitle,
  triggerClassName,
  triggerLabel = 'Apply Now',
}: ApplyDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    window.location.href = buildApplicationMailto({
      jobTitle,
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      message: String(data.get('message') ?? ''),
    });

    toast({
      title: 'Opening your email app…',
      description: `Attach your CV to the draft and send it to ${APPLY_EMAIL}.`,
    });

    form.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={
            triggerClassName ??
            'inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95 self-start'
          }
        >
          {triggerLabel}
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-secondary">
            Apply for {jobTitle}
          </DialogTitle>
          <DialogDescription>
            Fill in your details and we'll open an email draft with everything filled
            in — just attach your CV and send. Fields marked * are required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="apply-name">Full Name *</Label>
            <Input id="apply-name" name="name" required placeholder="Your full name" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="apply-email">Email *</Label>
              <Input id="apply-email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apply-phone">Phone *</Label>
              <Input id="apply-phone" name="phone" type="tel" required placeholder="+92 3xx xxxxxxx" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="apply-message">Cover Note</Label>
            <Textarea
              id="apply-message"
              name="message"
              rows={4}
              placeholder="Tell us briefly why you're a great fit…"
            />
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-primary/5 border border-primary/15 p-4">
            <Paperclip className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Remember to attach your CV (PDF, DOC or DOCX) to the email draft before
              sending. If your email app doesn't open, write to us directly at{' '}
              <a href={`mailto:${APPLY_EMAIL}`} className="font-medium text-primary hover:underline">
                {APPLY_EMAIL}
              </a>
              .
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-base"
          >
            <Mail className="w-4 h-4" />
            Continue in Email
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
