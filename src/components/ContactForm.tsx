import { useState } from "react";
import { Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!captchaValue) {
    toast({
      title: "Validation requise",
      description: "Veuillez confirmer que vous n'êtes pas un robot.",
    });
    return;
  }

  setLoading(true);

  emailjs
    .sendForm(
      "service_cl87i6k",
      "template_l1uy5mm",
      e.target,
      "b3gjqAaFLn1z3CPH0"
    )
    .then(
      () => {
        setLoading(false);
        toast({
          title: "Message envoyé !",
          description: "Je vous répondrai bientôt.",
        });
        e.target.reset();
        setCaptchaValue(null); // Reset du captcha après envoi
      },
      (error) => {
        console.log(error);
        setLoading(false);
        toast({
          title: "Erreur",
          description: "Impossible d'envoyer le message.",
        });
      }
    );
};
// const handleSubmit = (e) => {
//   e.preventDefault();
//   setLoading(true);

//   emailjs
//     .sendForm(
//       "service_cl87i6k", // ton service id
//       "template_l1uy5mm", // ton template id
//       e.target,
//       "b3gjqAaFLn1z3CPH0" // ta public key
//     )
//     .then(
//       () => {
//         setLoading(false);
//         toast({
//           title: "Message envoyé !",
//           description: "Je vous répondrai bientôt.",
//         });
//         e.target.reset();
//       },
//       (error) => {
//         console.log("object", error);
//         setLoading(false);
//         toast({
//           title: "Erreur",
//           description: "Impossible d'envoyer le message.",
//         });
//       }
//     );
// };
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
  //     (e.target as HTMLFormElement).reset();
  //   }, 1000);
  // };

  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Contactez-<span className="text-gradient">nous</span>
          </h2>
          <p className="mx-auto mb-12 max-w-md text-center text-muted-foreground">
           Vous avez un projet en tête ? Parlons de la façon dont nous pouvons travailler ensemble.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" name="name" placeholder="Votre nom" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="vous@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
             <Label htmlFor="name">Objet</Label>
                <Input id="title" name="title" placeholder="Objet" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Laissez un message..." rows={5} required />
            </div>
            <ReCAPTCHA
  sitekey="6LdcvowsAAAAAF5Ux2f4oLjnZamexlPAibKSAAzs"
  onChange={(value) => setCaptchaValue(value)}
/>
            <Button type="submit" className="w-full gap-2" disabled={loading}>
              <Send className="h-4 w-4" />
              {loading ? "En cours..." : "Envoyer Message"}
            </Button>
          </form>

          <div className="mt-12 flex items-center justify-center gap-4">
            {[
              { icon: Github, href: "https://github.com/softelisabeth-a11y", label: "GitHub" },
              { icon: Linkedin, href: "www.linkedin.com/in/eric-kanhonou-8aa91012a", label: "LinkedIn" },
              // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
