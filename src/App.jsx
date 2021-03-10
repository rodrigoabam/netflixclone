import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb.jsx'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(() => {
    const scrollListener = () => {

      window.scrollY > 20 ? setBlackHeader(true) : setBlackHeader(false)
      
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <div className="pageHome">

      <Header black={blackHeader} />

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }


      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <p>Direitos de imagem para Netflix</p>
        <p>Dados pegos da API do Tmdb</p>
      </footer>

      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://media1.tenor.com/images/f6b11bd53411d94338117381cf9a9b9b/tenor.gif?itemid=18131525" alt="Carregando"/>
      </div>
      }
    </div>
  )
}