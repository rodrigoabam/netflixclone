import React from 'react'
import './MovieRow.css'

export default ({title, items}) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRowArea">
        <div className="movieRowList">
          {items.results.length > 0 && items.results.map((item, key) => (           
             <div key={key} className="moveRowItem">
              <img src={`https://themoviedb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
             </div>
          ))}
        </div>      
      </div>
    </div>
  )
}