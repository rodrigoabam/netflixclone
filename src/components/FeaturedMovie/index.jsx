import React from 'react'
import './FeaturedMovie.css'

export default ({ item }) => {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }

  let description = item.overview
  if(description.length > 200) {
    description = description.substring(0, 200)+'...';
  }

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://themoviedb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featuredVert">
        <div className="featuredHorz">
          <div className="featuredName">{item.original_name}</div>
          <div className="featuredInfo">
            <p>{item.vote_average}</p>
            <p>{firstDate.getFullYear()}</p>
            <p>{item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's' : ''} </p>
            <div className="featuredDescription">
              {description}
            </div>
            <div className="featuredButtons">
              <a href={`/watch/${item.id}`}>► Assistir</a>
              <a href={`/list/add/${item.id}`}>+ Minha Lista</a>
            </div>
            <p><strong>Gêneros:</strong> {genres.join(', ')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}