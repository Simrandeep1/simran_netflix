import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utility/axios';
import { requests } from '../utility/requests';
import Card from '../components/Card';

function BrowseByGenre(props) {
    const[videoList, setVideoList]=useState(null);
    const[genreList, setGenreList]=useState(null);
 
    const{platform,id}=useParams();
    const[type,setType]=useState("movie")
    
        const fetchByGenre=async(platform,id)=>{
        const response=await axios.get(requests.getVideoByGenre(platform,id));
        setVideoList(response.data.results);
        }

        const fetchGenre=async(platform)=>{
            const response=await axios.get(requests.getGenre(platform));
            console.log(response.data)
            setGenreList(response.data.genres);
            }
        useEffect(()=>{
            if(platform && id){
                fetchByGenre(platform,id);
         }
       },[platform,id]);

        useEffect(()=>{
            if(platform){
                fetchGenre(platform);
            }
        },[platform])

        const handlePlatform=(e)=>{
            const value=e.target.value;
            fetchGenre(value);
            setType(value);

        }
        const handleGenre=(e)=>{
            const id=e.target.value;
            fetchByGenre(type,id);
            

        }
    return (
        <div className='conatiner-fluid pt-5'>
            <div className="d-flex">
                <select name="platform" onChange={handlePlatform}>
                    <option disabled selected>Select Platform</option>
                    <option value="tv">Tv</option>
                    <option value="movie">Movie</option>
                </select>
                <select name="genre" onChange={handleGenre}>
                    <option disabled selected>Select Genre</option>
                    {
                        genreList? genreList.map((genre)=>{
                           return <option value={genre.id}>{genre.name}</option>
                        }):""
                    }
                </select>              

            </div>

            <div className='row'>
            {
                    videoList? videoList.map((item)=>(
                        <div key={item.id} className='col-lg-3'>
                            <Card video={item} platform={platform}/>
                            </div>
                    )):""
}
            </div>
            
        </div>
    );
}

export default BrowseByGenre;