import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";
import EmailandPhone from "../components/EmailandPhone";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        BEGINNER & INTERMEDIATE COURSE
These courses have been highly regarded by students throughout the years, and has provided the perfect foundation to enter the next level of learning. Get in touch with questions or to learn more.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
      <EmailandPhone/>
      </div>
    </section>
  );
};

export default SpecialOffer;
