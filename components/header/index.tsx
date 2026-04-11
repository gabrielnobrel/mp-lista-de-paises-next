import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="flex h-12 w-full items-center bg-white px-60">
      <div>
        <Link href="/" className="flex-start flex items-center">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} logo`}
            width={30}
            height={30}
            priority={true}
          />

          <span className="ml-3 hidden text-[24px] font-medium lg:block">
            {APP_NAME}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
