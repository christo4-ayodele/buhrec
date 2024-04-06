import ResearchForm from '@/components/shared/ResearchForm';
import { auth } from '@clerk/nextjs';
import React from 'react';

const Upload = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Upload Paper
        </h3>
      </section>

      <div className="wrapper my-8">
        <ResearchForm userId={userId} />
      </div>
    </>
  );
};

export default Upload;
