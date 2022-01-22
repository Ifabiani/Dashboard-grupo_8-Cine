import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import CountByGenres from './CountByGenres';
import Footer from './Footer';

function ContentRowCenter(){
    return (
        <div className="">
            <div className="flex">
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CountByGenres />
            </div>
            
            

        </div>
    )
}

export default ContentRowCenter;