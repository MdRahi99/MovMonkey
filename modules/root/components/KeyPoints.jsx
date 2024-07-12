import Container from "@/components/shared/Container";
import point1 from "@/public/image/point-1.png";
import point2 from "@/public/image/point-2.png";
import point3 from "@/public/image/point-3.png";
import point4 from "@/public/image/point-4.png";
import point5 from "@/public/image/point-5.png";
import point6 from "@/public/image/point-6.png";
import Image from "next/image";

export default function KeyPoints() {
  return (
    <div className="select-none">
      <div className="mb-2 flex h-16 items-center justify-center bg-primary text-center text-2xl font-semibold text-black md:h-20 md:text-3xl">
        Key Points
      </div>

      <Container>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full md:w-6/12">
            <Image
              src={point1}
              alt="point1"
              className="aspect-auto"
              quality={100}
            />
          </div>
          <div className="w-full md:w-6/12">
            <Image
              src={point2}
              alt="point2"
              className="aspect-auto"
              quality={100}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full md:w-6/12">
            <Image
              src={point3}
              alt="point3"
              className="aspect-auto"
              quality={100}
            />
          </div>
          <div className="w-full md:w-6/12">
            <Image
              src={point4}
              alt="point4"
              className="aspect-auto"
              quality={100}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full md:w-6/12">
            <Image
              src={point5}
              alt="point5"
              className="aspect-auto"
              quality={100}
            />
          </div>
          <div className="w-full md:w-6/12">
            <Image
              src={point6}
              alt="point6"
              className="aspect-auto"
              quality={100}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
