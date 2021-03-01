const API_KEY = '5a6f3bd718ed0f6f40173d067a98e1d5';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json
}

export default {
  getHomeList: async () => {
    const partOfurl = 'language=pt-BR&api_key=';
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&${partOfurl}${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/day?${partOfurl}${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?${partOfurl}${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&${partOfurl}${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&${partOfurl}${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&${partOfurl}${API_KEY}`)
      },
      {
        slug: 'crime',
        title: 'Crime',
        items: await basicFetch(`/discover/movie?with_genres=80&${partOfurl}${API_KEY}`)
      },
      {
        slug: 'misterio',
        title: 'Mistério',
        items: await basicFetch(`/discover/movie?with_genres=9648&${partOfurl}${API_KEY}`)
      }
    ]
  }
}