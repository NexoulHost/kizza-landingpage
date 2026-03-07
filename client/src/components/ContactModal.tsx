import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

interface ContactModalProps {
  children: React.ReactNode;
}

export function ContactModal({ children }: ContactModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const submitContact = useSubmitContact();

  const form = useForm<any>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: any) {
    submitContact.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
        setOpen(false);
      },
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-[2rem] p-8 border-none shadow-2xl">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-3xl font-display text-primary">Let's Talk</DialogTitle>
          <DialogDescription className="text-base">
            Send us a message and our team will get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      className="rounded-xl h-14 px-5 bg-secondary/50 border-transparent focus-visible:ring-primary focus-visible:border-primary transition-all"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="john@example.com" 
                      className="rounded-xl h-14 px-5 bg-secondary/50 border-transparent focus-visible:ring-primary focus-visible:border-primary transition-all"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">Your Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      className="rounded-xl min-h-[120px] p-5 bg-secondary/50 border-transparent focus-visible:ring-primary focus-visible:border-primary transition-all resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full h-14 rounded-xl text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
              disabled={submitContact.isPending}
            >
              {submitContact.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
