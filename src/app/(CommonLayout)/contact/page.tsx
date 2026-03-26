"use client";

import { useState } from "react";
import ContactUsBanner from "@/components/pages/contact-us/ContactUsBanner";
import { Input } from "@/components/ui/input";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSectors, territories } from "@/constants";
import Link from "next/link";

const ContactPage = () => {
  const [selectedTerritory, setSelectedTerritory] = useState("");
  const [selectedSector, setSelectedSector] = useState("");

  return (
    <main>
      <ContactUsBanner />

      <section className="py-20">
        <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* contact info column */}
          <div className="space-y-4">
            <h6 className="text-lg font-semibold">Let&apos;s Connect</h6>

            {/* email */}
            <div className="flex items-center gap-3 rounded-xl border p-5">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#F9FCF5]">
                <FaEnvelope className="text-2xl" />
              </div>
              <div className="space-y-1">
                <p className="text-sm">
                  <strong>Email</strong>
                </p>
                <Link href="mailto:info@vitarecruitment.eu">
                  <p className="text-sm">info@vitarecruitment.eu</p>
                </Link>
              </div>
            </div>

            {/* address */}
            <div className="flex items-center gap-3 rounded-xl border p-5">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#F9FCF5]">
                <FaMapMarkedAlt className="text-2xl" />
              </div>
              <div className="space-y-1">
                <p className="text-sm">
                  <strong>Office Address:</strong>
                </p>
                <Link
                  href="https://www.google.com/maps/place/London+E18+2QH,+UK"
                  target="_blank"
                  className="hover:underline"
                >
                  <p className="text-sm">
                    South Woodford, London, United Kingdom, E18 2QH
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* form column */}
          <div>
            <h6 className="mb-4 text-lg font-semibold">
              Request A Business Consultation
            </h6>

            <form
              action="https://formsubmit.co/7f4c3527d3f6241b21e479419f88eb17"
              method="POST"
              className="space-y-5"
            >
              {/* hidden config */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://vitarecruitment.eu/"
              />

              {/* hidden values for select */}
              <input type="hidden" name="territory" value={selectedTerritory} />
              <input type="hidden" name="sector" value={selectedSector} />

              <div>
                <Label>Name*</Label>
                <Input name="name" placeholder="Name" type="text" required />
              </div>

              <div>
                <Label>Email*</Label>
                <Input name="email" placeholder="Email" type="email" required />
              </div>

              <div>
                <Label>Phone Number*</Label>
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                  required
                />
              </div>

              <div>
                <Label>Company Name*</Label>
                <Input
                  name="company"
                  placeholder="Company Name"
                  type="text"
                  required
                />
              </div>

              {/* Territory */}
              <div>
                <Label>Territory*</Label>
                <Select onValueChange={setSelectedTerritory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Territory" />
                  </SelectTrigger>
                  <SelectContent>
                    {territories.map((territory, i) => (
                      <SelectItem value={territory.value} key={i}>
                        {territory.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sector */}
              <div>
                <Label>Sector*</Label>
                <Select onValueChange={setSelectedSector}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactFormSectors.map((sectors, i) => (
                      <SelectItem value={sectors.value} key={i}>
                        {sectors.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Your Message*</Label>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="bg-secondary-bridge">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
