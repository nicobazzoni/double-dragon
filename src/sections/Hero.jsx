import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import EmailandPhone from "../components/EmailandPhone";


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10  max-container'
    >
      <div className='relative xl:w-2/5 flex bg-yellow-200 flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat mt-2 text-coral-red'>
         Be Prepared. Be Safe. Be Ready.
        </p>

        <h1 className='mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
           DOUBLE DRAGON 
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>MARTIAL ARTS </span> ACADEMY
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        JOIN DOUBLE DRAGON MARTIAL ARTS ACADEMY TODAY!
Where Students Come First
At the heart of everything that we do is our passion for education and our commitment to our students. Thanks to our varied course selection and unique teaching techniques.

​

Double Dragon Martial Arts Academy is located in Staten Island, New York and reflects the vibrant energy of the area. The skilled team members at are here to help students achieve their goals. Are you ready to reach your potential? Call us today to learn more about Double Dragon Martial Arts Academy.  Please come in and visit during our schools hours.


        </p>

       <EmailandPhone />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero h-screen bg-cover bg-center'>
      <img
  src={bigShoeImg}
  alt='shoe collection'
  style={{ maxHeight: "650px" }}
  className='w-fit relative border rounded-md z-10'
/>

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[1%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div className="max-h-24" key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
