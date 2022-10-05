import loader from '../assets/loader.svg';

const Loader = ({ title }) => (
 <div className='flex flex-col items-center justify-center w-full '>
  <img src={loader} alt='loader' />
  <h1 className='text-white font-bold text-3xl mt-8'>{title || 'Loading...'}</h1>
 </div>
);

export default Loader;
