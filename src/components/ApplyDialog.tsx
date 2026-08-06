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
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from '@/lib/web3forms';
import { Loader2, Upload } from 'lucide-react';

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
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      toast({
        title: 'Form not connected yet',
        description:
          'Add your Web3Forms access key in ApplyDialog.tsx to start receiving applications.',
        variant: 'destructive',
      });
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData(form);
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('subject', `New Job Application: ${jobTitle}`);
      formData.append('from_name', 'ShelterLink Careers');

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        toast({
          title: 'Application submitted ✅',
          description: 'Thank you! We have received your application and will be in touch.',
        });
        form.reset();
        setOpen(false);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      toast({
        title: 'Something went wrong',
        description: 'Your application could not be sent. Please try again or email us directly.',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
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
            Fill in your details and attach your CV. Fields marked * are required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          {/* Position is sent along automatically */}
          <input type="hidden" name="position" value={jobTitle} />

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

          <div className="space-y-2">
            <Label htmlFor="apply-cv" className="flex items-center gap-2">
              <Upload className="w-4 h-4" /> Upload CV / Resume *
            </Label>
            <Input
              id="apply-cv"
              name="cv"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              className="cursor-pointer file:mr-3 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-1 file:text-primary"
            />
            <p className="text-xs text-muted-foreground">PDF, DOC or DOCX — max ~5MB.</p>
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-base"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
              </>
            ) : (
              'Submit Application'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
