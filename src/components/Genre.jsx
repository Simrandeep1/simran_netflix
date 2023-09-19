import React from 'react';
import { Link } from 'react-router-dom';

function Genre(props) {
    const { genre, platform } = props;
    return (
        <Link className='badge text-bg-warning py-2 px-3 me-2 text-decoration-none' to={`/browsebygenre/${platform}/${genre.id}`}>
            {genre.name}
        </Link>
    );
}

export default Genre;