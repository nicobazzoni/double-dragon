import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import logo from "../assets/images/DDLOGO.jpeg";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute  text-black z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src='https://static.wixstatic.com/media/564f9f_a589c1f6775b4cb7817898c1371d56b6~mv2.png/v1/fill/w_912,h_263,al_c,lg_1,q_85,enc_auto/DD.png'
            alt='logo'
            width={129}
            height={72}
            className='m-0 w-[300px] h-[79px] border rounded-md'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
       
      
        <div className=' max-lg:block'>
          <img src={logo} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
