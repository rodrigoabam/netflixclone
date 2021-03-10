import React, { useState } from 'react'
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {
  const [scrollX, setScrollX] = useState(0);
  let screenWidth = window.innerWidth 

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(screenWidth / 2);
    if( x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {  
    let x = scrollX - Math.round(screenWidth / 2);
    let listW = items.results.length * 150

    if((screenWidth - listW) > x) {
      x = (screenWidth - listW) - 60
    }

    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRowLeft" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRowRight" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRowArea">
        <div className="movieRowList" style={{ marginLeft: scrollX, width: items.results.length * 150 }} >
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