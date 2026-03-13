import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const OurPartners = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-2 text-center text-4xl font-semibold">
          Our Partners
        </h2>

        <p className="mx-auto max-w-[950px] text-center text-lg">
          SMASCO is the first choice for big names in the Kingdom.
        </p>

        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <div className="relative h-52 min-h-[96px]">
                <Image
                  className="object-contain object-center"
                  src="/mcdonald.png"
                  alt="mcdonald"
                  fill
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default OurPartners;
