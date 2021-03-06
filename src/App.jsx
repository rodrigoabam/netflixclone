import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb.jsx'
import MovieRow from './components/MovieRow.jsx'
import FeaturedMovie from './components/FeaturedMovie.jsx'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'originals');
      let randomOriginal = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let original = originals[0].items.results[randomOriginal]
      let originalInfo = await Tmdb.getMovieInfo(original.id, 'tv')
      setFeaturedData(originalInfo)
    }

    loadAll()
  },[])

  return (
    <div className="pageHome">

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }


      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}