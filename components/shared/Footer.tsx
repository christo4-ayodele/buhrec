import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex lg:flex-row flex-col flex-between wrapper">
      <div>
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={128}
          height={56}
        />
      </div>

      <div>BUHREC from Babcock University. Copyright 2024.</div>
    </footer>
  );
};

export default Footer;
