import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { platformSelector, videoDetailsSelector } from '../features/common/commonSlice';
import VideoPlayer from './VideoPlayer';
import Genre from './Genre';

function Popup(props) {
    const{data}=useSelector(videoDetailsSelector);
    const platform=useSelector(platformSelector);
    const [video, setVideo] = useState("inception");
      
   useState("https://youtu.be/sa9l-dTv9Gk");
    //useState("https://www.google.com/search?q=netflix+thriller+movies&oq=netflix+thriller+movies&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIMCAIQABgUGIcCGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEJMTY1NTBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#wvs=q:action%2520netflix%2520thriller%2520movies,stick:H4sIAAAAAAAAAO1XTYgjVRCeJDs7Sc-PY4swZEHGEYMM7PRf0p0OhmGURT2syu6KJ2k63a__-6X_0p30SQQviydvI57G26KwCIqCguJJWC-iHgQFFQQXb-7Bg6CdpKsnyY4sqCdnbvlS9arq1Vf15aW68WPpTmV185ffv3-gfrvy-tuff1P6qULUriqDHlKvxS75cYWoyIFOvlch380Mz-AIBSFSIvKHErHynIcCGavk1yXyyxJx_nI_NlFY_6xEfJIhd4IeXFp6eX-rvFtGuHOjZESRF3YoyszC4OiiI_f2lH7g7en9vu6g7LNL-QMUZOf2k35gh56soO7TSFYbkax3TawOlMjs48YgRFLfUaUQyYFidKNggBqOjPUuwhdfuNow1e7U8ih3IKOWJohtUVA1jdEYpjFOOAi71NSjoZlOdiWkSvPfd8qPlclLx1fskG2CvIxUUz4IQxQ9H2S3U1FA7hDnL-HIjEbken2VqFEuRTNCoEn1WmcFo0hzzCH5-HEYhqSI6ots8hTCASIfOeGwpYW9OtGpRkZgOk6WYeF07Qpy5Cgjpz-Te6O-RhDj46ytxi2nXu2cP5h0aoe8_eqbf6zOWdPyZmntqPJtjVh5Nq_wu_Is5x-Up5zfLJPvlE8b5_-KrJ37J-1eJY8HYdzt-n3gsD3t0M6xfXed0imG8bGeOu04zqFOW62eFmg5NCRFSWNxBM6-wFqsZufQYnqemNJpDiMhsmwsBkXk2KXbLoQKhrjt8glYg0QwYj9o7k4GJBEZXMTxYiWRYgwVapFPjzAtQoVu6niiUlgFrsUZei-H7rBnC4rVggoxk3KJo4KzyquG5kL9OhNJsRvRUHBgYSlmIbLR84ZYVxUIxY44gXEBBmlLZTl_NK2f5xnf4cCTThzJERjIMmKbMaOxUINvDxlOSSAL7fKpPWznUOGDYStlwhyGicFInM-DM6OltOq3dyc08i1VaUJOxzY0m_EhiRWnkmHxBUxZzbLhogEnCZwV62D1rGTo2JDTllotm3eC3dXJrGShQxs6pgiMKkkehpM0b1upA3F1PWzaXtsvGGdHosh5UKJgiQnLcxA3dJsG2Ixm6o-i2Jt202i3edqBFiix6hqqUTCK05FvBcftM7RUgIIwTys-Tgx66YmHKaWfTf5khyl3LKCSPFZQycslNLwigkQkSbKnh5EcmcpEF2xvYFKJHCkGlWupZCp9LDXpYZPe87B-48-v3iJIYm2c1OdDZhirw62l7aWjyms1onoNJPTnOXn7NJe3D8vk-6dO3v6bn7QFnRvL4ETnNnL7vMyNzWcydyZz_2eZ27pb5vTxsyFEX9y61T2qHK4Q-ZOMPHtgn4IHdv0heWLfBkVcfAHO-J8sRP9MTO7WhwUFuMfqzi_ngrYs6EOxuifu44IgLwhpoTwzK9i5MO1p0atwOwP5f5S_37CXmF_FJ9Ebh4f7r_z20Z0qXSXI9RmuN5cLOJ6bzQvkxixZm8vXz833HzAQABgYAAwUAAYOrp-bIaE4nLNQBM9pKOw5DwXOiSj8cyYAAxWAgYuiuJyMoricjcKe0wEY-MiLnxJytHyPKb65XP4Ls-mjaUMQAAA,nfpr:1&wxpd=browse:true")
    return (
      <div className="modal" tabIndex="-1" id='video-modal'>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <VideoPlayer videosList={data?.videos.results}/>
            <p>{data?.overview}</p>
            {
              data?.genres.map((item)=>{
                <Genre key={item.id} genre={item} platform={platform}/>

              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
  
   
    
       
    

export default Popup;