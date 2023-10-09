import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12 p-2 border rounded-md bg-slate-100'>
      <div className='flex flex-col justify-start gap-5 '>
        <h2 className='text-4xl font-palanquin font-bold'>
          Top <span className='text-coral-red'> Notch </span> Training
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-black'>
          Experience yourself in full form and power. 
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  rounded-md sm:gap-6 gap-14'>
        {products.map((product) => ( 
          <div className="border rounded-md  ">
          <PopularProductCard key={product.name} {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
