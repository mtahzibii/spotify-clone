import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useState } from 'react';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { useDispatch, useSelector } from 'react-redux';

const Discover = () => {
 const dispatch = useDispatch();
 const { isPlaying, activeSong } = useSelector((state) => state.player);
 const { data, isFetching, error } = useGetTopChartsQuery();
 const [songs, setSongs] = useState([]);
 const [genre, setGenre] = useState('');

 console.log(data);

 //  const onChange = (e) => {
 //   console.log(e.target);
 //  };

 if (isFetching) return <Loader title='Loading songs...' />;
 if (error) return <Error />;

 return (
  <div className='flex flex-col'>
   <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 '>
    <h1 className='text-white font-bold text-3xl'>Discover {genre}</h1>
    <select
     onChange={() => onChange(e)}
     value={genre}
     name='genres'
     id='genres'
     className='w-35 rounded-sm py-1 px-4 outline-none bg-slate-200 text-sm sm:mt-0 mt-5'
    >
     {genres.map((genre) => (
      <option key={genre.value} value={genre.value}>
       {genre.title}
      </option>
     ))}
    </select>
   </div>

   <div className='flex flex-wrap justify-center sm:justify-start  rounded-sm  text-white border border-white gap-4'>
    {data?.map((song, idx) => (
     <SongCard
      key={song.key}
      index={idx}
      song={song}
      isPlaying={isPlaying}
      activeSong={activeSong}
      data={data}
     />
    ))}
   </div>
  </div>
 );
};

export default Discover;
