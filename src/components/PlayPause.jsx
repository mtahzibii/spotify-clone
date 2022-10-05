import React from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }) =>
 isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle size={45} className='text-gray-300' onClick={handlePause} />
 ) : (
  <FaPlayCircle size={45} className='text-gray-300' onClick={handlePlay} />
 );

export default PlayPause;
