import React from 'react'
import Home from './Home'

export default function SearchResult(props) {
    const movieResults=props.movies?.map((movie, i)=>{
        return <Home movie={movie} key={i}/>
    })
    console.log(props.movies)
    return (
        <>  <div>
            <div className='d-flex flex-wrap justify-content-around mt-3'>
            {movieResults}
            </div>
            </div>
        </>
    )
}

