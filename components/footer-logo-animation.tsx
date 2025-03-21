import React from "react";
import LogoAnimation from "./logo-animation";
import Link from "next/link";

const FooterLogoAnimation = () => {
  return (
    <footer className="flex-0 max-h-10 mt-auto">
      <Link href="/">
        <LogoAnimation />
      </Link>
    </footer>
  );
};

export default FooterLogoAnimation;
