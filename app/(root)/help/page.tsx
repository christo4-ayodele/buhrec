import Image from 'next/image';
import React from 'react';

const Help = () => {
  return (
    <div className="bg-book-pattern flex w-full h-[600px] flex-col items-center bg-primary-50 bg-cover backdrop-brightness-0 py-5 md:py-10 heroImg">
      <p className="text-3xl font-medium p-5">Need Help?</p>

      <div className="bg-primary-500 rounded-md shadow-xl p-10 m-2">
        <p className="text-2xl text-gray-200 pb-3">
          If you have any issues or enquiries pls contact us:{' '}
        </p>

        <div className="flex-center gap-2">
          <Image
            src="/assets/icons/whatsapp.svg"
            alt="whatsapp-logo"
            width={48}
            height={48}
            className="svg-white"
          />
          <p className="text-gray text-3xl">+234-BABCOCK</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
