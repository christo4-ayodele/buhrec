import { Button } from '@/components/ui/button';
import { welcomeText } from '@/constants';

export default async function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex w-full h-[600px] flex-col items-center py-5 md:py-10 "
      >
        <h1 className=" text-center items-center top-[150px] font-bold text-[60px]">
          {welcomeText}
        </h1>
        <div className="text-center">
          <p className="text-[30px] font-bold">
            Get your research evaluated <br />
            <span className="text-center text-primary-500">
              by Professionals.
            </span>
          </p>

          <Button
            variant="outline"
            className="bg-primary2-500 font-bold hover:bg-primary-500 hover:text-primary-50"
          >
            Get Started
          </Button>
        </div>
      </section>
    </>
  );
}
