import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Double Dragon
          <span className='text-blue-200'> Provides </span>
          <span className='text-coral-red'>Quality </span> Martial Arts Training
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        ADVANCED COURSE
Through this course, students have the opportunity to push their skills, techniques and confidence to a new level in a fun, dynamic way. Contact us today to learn more about each of our course offerings.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>

           
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src='https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/342358821_1408774753193250_8859410418874307293_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=E1F53wcW3foAX8s4yXF&_nc_ht=scontent-lga3-2.xx&oh=00_AfBIKECxGegPRldTZLA7nfTldScRop_fNb0RHQuweJ1B3Q&oe=65279518'
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
