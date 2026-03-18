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
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vita Recruitment| | Contact Us",
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
                  <strong>Office Address:</strong>
                </p>
                <Link
                  href="https://www.google.com/maps/place/London+E18+2QH,+UK/@51.5964773,0.0196963,17z/data=!3m1!4b1!4m6!3m5!1s0x47d8a74a8825f56b:0xac32f74b469e72ea!8m2!3d51.5966082!4d0.0226383!16s%2Fg%2F1tf7fy67?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
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
