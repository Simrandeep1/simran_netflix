import React, { useEffect, useState } from 'react';

function VideoPlayer(props) {
    const{videosList}=props;
    const[key,setKey]=useState('');

    useEffect(()=>{
        if(videosList && videosList.length>0){
     const trailer= videosList?.find((item)=>{
        return item.type==="Trailer"
     })
     setKey(trailer.key);
    }
    },[videosList])
    
    return (
        <div>
            <div class="ratio ratio-16x9 video-player" >
         <iframe 
         src={`https://www.youtube.com/embed/${key}?rel=0&&autoplay=1&mute=1`}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
           allowfullscreen>

          </iframe>
</div>
        </div>
    );
}

export default VideoPlayer;