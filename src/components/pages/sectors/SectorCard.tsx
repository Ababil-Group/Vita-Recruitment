import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type TSectorCardProps = {
  sector: {
    title: string;
    description: string;
    image: string;
    path: string;
  };
};

const SectorCard = ({ sector }: TSectorCardProps) => {
  const { title, description, image, path } = sector;

  return (
    <div className="flex flex-col items-center justify-start gap-3 rounded-xl bg-white p-5">
      <div className="relative min-h-[300px] w-full">
        <Image
          className="rounded-xl border object-cover object-center"
          src={image}
          alt={title}
          fill
        />
      </div>

      <h1 className="text-center font-bold">{title}</h1>

      <p className="text-center text-sm">{description}</p>

      <div className="mt-auto flex items-center justify-center">
        <Link href={path}>
          <Button
            className="border-primary-bridge text-primary-bridge"
            variant="outline"
          >
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SectorCard;
