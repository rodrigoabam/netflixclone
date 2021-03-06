const API_KEY = '5a6f3bd718ed0f6f40173d067a98e1d5';
const API_BASE = 'https://api.themoviedb.org/3';
const partOfUrl = 'language=pt-BR&api_key=';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&${partOfUrl}${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/day?${partOfUrl}${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?${partOfUrl}${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&${partOfUrl}${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&${partOfUrl}${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&${partOfUrl}${API_KEY}`)
      },
      {
        slug: 'crime',
        title: 'Crime',
        items: await basicFetch(`/discover/movie?with_genres=80&${partOfUrl}${API_KEY}`)
      },
      {
        slug: 'misterio',
        title: 'Mistério',
        items: await basicFetch(`/discover/movie?with_genres=9648&${partOfUrl}${API_KEY}`)
      }
    ]
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId) {
      switch(type){
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?${partOfUrl}${API_KEY}`)
        break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?${partOfUrl}${API_KEY}`)
        break;
        default:
          info = null;
        break;
      }
    }

    return info
  }
}