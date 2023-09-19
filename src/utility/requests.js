const API_KEY ='3c5d3db22fe5175246392a320f10bd75';


export const requests ={
    getNfOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    getMovies: (endpoint)=>`movie/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getTv: (endpoint)=>`tv/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getVideoDetails: (type)=>`${type.platform}/${type.id}?api_key=${API_KEY}&language=en-US&page=1&append_to_response=videos`,
    getGenre:(type)=>{return `genre/${type}/list?api_key=${API_KEY}&language=en-US&page=1`},
    getVideoByGenre: (platform, genreId)=>`discover/${platform}?api_key=${API_KEY}&with_genres=${genreId}`,
    search: (param)=>{return `/search/${param.type}?api_key=${API_KEY}&query=${param.query}&language=en-US&page=1`}
    
}




export const endpoints ={
    popular: 'popular',
    //topRated:'top_Rated',
    upcoming:'upcoming',
    nowPlaying:'now_Playing',
    airingToday:'airing_today',
    onTheAir:'on_the_air',
    movie: 'movie',
    tv:'tv'
}
