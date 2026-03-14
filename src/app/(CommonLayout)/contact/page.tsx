import ContactUsBanner from "@/components/pages/contact-us/ContactUsBanner";
import { Input } from "@/components/ui/input";
// import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridge The Gap | Contact Us",
};

const ContactPage = () => {
  return (
    <main>
      <ContactUsBanner />

      <section className="py-20">
        <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* contact info column  */}
          <div className="space-y-4">
            <h6 className="text-lg font-semibold">Let&apos;s Connect</h6>
            {/* card  */}
            {/* <div className="flex items-center gap-3 rounded-xl border p-5">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#F9FCF5]">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div className="space-y-1">
                <p className="text-sm">
                  <strong>Business Phone:</strong> +880 1234 567890
                </p>
                <p className="text-sm">
                  <strong>Fax:</strong> +880 1234 567890
                </p>
              </div>
            </div> */}
            {/* card  */}
            <div className="flex items-center gap-3 rounded-xl border p-5">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#F9FCF5]">
                <FaEnvelope className="text-2xl" />
              </div>
              <div className="space-y-1">
                <p className="text-sm">
                  <strong>Email</strong>
                </p>
                <p className="text-sm">info@vitarecruitment.eu</p>
              </div>
            </div>
            {/* card  */}
            <div className="flex items-center gap-3 rounded-xl border p-5">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#F9FCF5]">
                <FaMapMarkedAlt className="text-2xl" />
              </div>
              <div className="space-y-1">
                <p className="text-sm">
                  <strong>Office</strong>
                </p>
                <p className="text-sm">
                  Qatar - Kempinski, The Pearl, Doha, Qatar. P.O. Box 12345,
                  Doha, Qatar.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border p-5">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#F9FCF5]">
                <FaMapMarkedAlt className="text-2xl" />
              </div>
              <div className="space-y-1">
                <p className="text-sm">
                  <strong>Office</strong>
                </p>
                <p className="text-sm">
                  UK - 16 Holmesdale Road, Teddington, Middlesex, TW11 9LF
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border p-5">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#F9FCF5]">
                <FaMapMarkedAlt className="text-2xl" />
              </div>
              <div className="space-y-1">
                <p className="text-sm">
                  <strong>Office</strong>
                </p>
                <p className="text-sm">
                  Canada - 999 Canada Pl #404, Vancouver, BC V6C 3E1, Canada
                </p>
              </div>
            </div>
          </div>
          {/* form column */}
          <div className="">
            <h6 className="mb-4 text-lg font-semibold">
              Request A Business Consultation
            </h6>

            <form className="space-y-5" action="">
              <div>
                <Label>Name*</Label>

                <Input placeholder="Name" type="text" required />
              </div>

              <div>
                <Label>Email*</Label>
                <Input placeholder="Email" type="email" required />
              </div>

              <div>
                <Label>Phone Number*</Label>
                <Input placeholder="Phone Number" type="tel" required />
              </div>

              <div>
                <Label>Company Name*</Label>
                <Input placeholder="Company Name" type="text" required />
              </div>

              <div>
                <Label>Territory*</Label>
                <Select>
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

              <div>
                <Label>Sector*</Label>
                <Select>
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
                <Textarea placeholder="Your Message" rows={5} />
              </div>

              <Button className="bg-secondary-bridge">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
