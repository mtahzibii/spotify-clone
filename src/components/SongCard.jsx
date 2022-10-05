import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, index, isPlaying, activeSong, data }) => {
 const dispatch = useDispatch();

 const handlePauseClick = () => {
  dispatch(playPause(false));
 };

 const handlePlayClick = () => {
  dispatch(setActiveSong({ song, data, index }));
  dispatch(playPause(true));
 };

 return (
  <div className='flex flex-col w-[250px] justify-start bg-white/5 rounded-lg p-4  cursor-pointer animate-slideup backdrop-blur-sm'>
   <div className='relative h-56 w-full group border'>
    <div
     className={`absolute inset-0 justify-center items-center bg-black bg-opacity-30 group-hover:flex  ${
      activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'
     }`}
    >
     <PlayPause
      song={song}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
     />
    </div>
    <img src={song?.images?.coverart} alt='cover_art' />
   </div>
   {/* Song info */}
   <div className='mt-4 flex flex-col'>
    <p className='font-semibold text-lg text-white truncate'>
     <Link to={`/song/${song?.key}`}>{song.title}</Link>
    </p>
    <p className='mt-1 font-sm text-gray-300  truncate'>
     <Link
      to={song?.artists ? `/artists/${song.artists[0].adamid}` : '/top-srtists'}
     >
      {song.subtitle}
     </Link>
    </p>
   </div>
  </div>
 );
};

export default SongCard;
