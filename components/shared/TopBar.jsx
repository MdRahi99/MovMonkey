import Link from "next/link";
import Facebook from "../icon/Facebook";
import Google from "../icon/Google";
import Instagram from "../icon/Insta";
import Twitter from "../icon/Twitter";
import Youtube from "../icon/Youtube";
import Container from "./Container";

export default function TopBar() {
  return (
    <header className="bg-black/80 flex items-center py-1 sm:py-0 sm:h-[3rem] w-full text-white">
      <Container extraClassName="!py-0 max-w-6xl w-full">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-1">
          {/* social icons  */}
          <div className="flex items-center gap-4">
            <Link href={""}>
              <Facebook />
            </Link>
            <Link href={""}>
              <Twitter />
            </Link>
            <Link href={""}>
              <Google />
            </Link>
            <Link href={""}>
              <Instagram />
            </Link>
            <Link href={""}>
              <Youtube />
            </Link>
          </div>

          {/* contact info  */}
          <div className="sm:divide-x text-center sm:text-left flex justify-between items-center xs:gap-8">
            <div>
              <Link
                href={`tel:1800-9938-2839`}
                className="text-xs block sm:w-fit text-center sm:text-left"
              >
                1800-9938-2839
              </Link>
              <Link
                href={`mailto:support@movmonkey.com`}
                className="text-xs block sm:w-fit text-center sm:text-left"
              >
                support@movmonkey.com
              </Link>
            </div>
            <div className="hidden sm:block pl-8">
              <p className="text-xs">A-507 SOUTH</p>
              <p className="text-xs">Whales, Australia</p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
