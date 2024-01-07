const Key = "20325b57b63187bb9a782879cbcc0ac5"

const axios = require('axios').default;
export const getData = async (name) =>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
   const data = res.data
   return data.results
}





