import ResearchForm from '@/components/shared/ResearchForm';
import React from 'react';

type Props = {};

const Upload = (props: Props) => {
  return (
    <>
      <section className="bg-primary-50 bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Upload Paper
        </h3>
      </section>

      <div className="wrapper my-8">
        <ResearchForm />
      </div>
    </>
  );
};

export default Upload;
