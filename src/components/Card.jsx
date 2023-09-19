import React from 'react';
import { truncateText } from '../utility/utils';
import Ratings from "./Ratings";
import { fetchVideoDetails, platformAction } from '../features/common/commonSlice';
import { useDispatch } from 'react-redux';

function Card(props) {
  const {video, platform} =props;
  const dispatch=useDispatch();

  const getVideoDetails=()=>{
    dispatch(fetchVideoDetails({platform, id:video.id}))
    dispatch(platformAction(platform));
  }

    return (
      <div className="card h-100 text-white" onClick={getVideoDetails} data-bs-toggle="modal" data-bs-target="#video-modal">
      <img className='w-100' src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" />

      <div className="card-body">
      <h5 className="display-2 title-mb-0">{video?.name|| video?.title || video?.original_title || video?.original_name}</h5>
      <Ratings voteAverage={video?.vote_average} voteCount={video?.vote_count}/>
      <p>{truncateText(video?.overview, 60)}</p>
      </div>
      <button className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#video-modal" onClick={getVideoDetails}>View</button>
       
       </div>
    );
}

export default Card;