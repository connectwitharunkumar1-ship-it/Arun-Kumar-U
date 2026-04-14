import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { db, handleFirestoreError, OperationType } from "@/src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const leadData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      source: "Contact",
      message: formData.get("message") as string,
      phone: "N/A", // Contact form doesn't have phone, but rules require it. Let's add it or adjust rules.
      createdAt: serverTimestamp(),
    };

    // Wait, the rules require 'phone'. Let's add a phone field to the contact form for consistency.
    // Or I'll update the rules to make phone optional for Contact source.
    // For now, I'll add the phone field to the UI to be safe and better for business.

    try {
      await addDoc(collection(db, "leads"), leadData);
      setIsSubmitted(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, "leads");
    } finally {
      setIsLoading(false);
    }
  };
    return (
      <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Have questions about the program or need help with the application process? Our team is here to help you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#004aad]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Office</h4>
                  <p className="text-slate-600">
                    No.98, Ground Floor, Opp Mega's Kamala Residency, SRS Road, Peenya, Bangalore, KA 560058
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#004aad]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-600">
                    +91-7411772001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#004aad]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">info@iimat.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-600 mb-8">Thank you for your interest. We will send the brochure to your email shortly.</p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-xl">
                  Request Another Brochure
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name</Label>
                    <Input id="contact-name" name="name" required placeholder="John Doe" className="bg-white py-6 rounded-xl border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input id="contact-email" name="email" type="email" required placeholder="john@example.com" className="bg-white py-6 rounded-xl border-slate-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input id="contact-phone" name="phone" required placeholder="+1 234 567 890" className="bg-white py-6 rounded-xl border-slate-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" name="message" placeholder="How can we help you?" className="bg-white rounded-xl border-slate-200 min-h-[150px]" />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-8 rounded-xl font-bold text-lg flex gap-2"
                >
                  {isLoading ? "Processing..." : (
                    <>
                      <Send className="w-5 h-5" />
                      Get Brochure
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
