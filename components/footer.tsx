import vercel from '../public/vercel.svg';
import Image from 'next/image';

const footer = () => {
  return (
    <>
      <footer className="py-7 bg-lightblue">
       <div className='flex align-center justify-center items-center align-middle w-full'>
       <a href="https://vercel.com/?utm_source=gramoly&utm_campaign=oss">
       <Image src={vercel} alt="vercel" /> 
       </a>
       </div>
      </footer>
    </>
  );
};

export default footer;
