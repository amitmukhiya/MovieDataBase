import React from 'react'
import { useEffect, useState } from 'react'

export default function UpcomingSection() {
    const [upcoming, setUpcoming]=useState()
    useEffect(() => {
        // https://api.themoviedb.org/3/movie/upcoming?api_key=df17fa8ae0c40937fe08a2c3315df8ce&language=en-US&page=1
         fetch(`https://api.themoviedb.org/3/movie/238?api_key=df17fa8ae0c40937fe08a2c3315df8ce&language=en-US`)
        .then((Response)=>Response.json())
        .then((data)=>{
            setUpcoming(data)
        })
    }, [])
    console.log(upcoming)

    return (
        <div>
            {/* showing old movies take some time to update */}
            
        </div>
    )
}
