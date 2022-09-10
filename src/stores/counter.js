import { createSlice } from '@reduxjs/toolkit'




export const counter = createSlice({
    name: 'counter',
    initialState: {
        value: [],
        watchlist: localStorage.getItem("watchlist")?
        JSON.parse(localStorage.getItem('watchlist')) : [],
        favoritemovies: localStorage.getItem("favoritemovies")?
        JSON.parse(localStorage.getItem('favoritemovies')) :[],
        counterR:localStorage.getItem("counterR")?
        JSON.parse(localStorage.getItem('counterR')) :  0,
        counterHeart:localStorage.getItem("counterHeart")?
        JSON.parse(localStorage.getItem('counterHeart')) : 0
    },
    reducers: {
        increment: state => {
            state.counterR += 1
            localStorage.setItem("counterR",JSON.stringify(state.counterR))
            console.log(state.counterR,"counterR");
        },
        incrementH:state => {
            state.counterHeart += 1
            localStorage.setItem("counterHeart",JSON.stringify(state.counterHeart))
            console.log(state.counterHeart,"counterHeart");
        },
        decrement: state => {
            state.counterR -= 1
            localStorage.setItem("counterR",state.counterR)
            
        },
        decrementH: state => {
            state.counterHeart -=1
            localStorage.setItem("counterHeart",state.counterHeart)
        },
        setMoviesData: (state, action) => {
            state.value = action.payload

        },
        setWatchlist: (state, action) => {
            state.watchlist = [action.payload,...state.watchlist]
            localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
            

        },
        setDelet: (state, action) => {
            state.watchlist = state.watchlist.filter(filt => filt.id !== action.payload)
            localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
           
    },
    setFavoritList: (state, action) => {

        state.favoritemovies = [action.payload,...state.favoritemovies]
        localStorage.setItem("favoritemovies",JSON.stringify(state.favoritemovies))
    },setDeletHeart: (state, action) => {
        state.favoritemovies = state.favoritemovies.filter(filt => filt.id !== action.payload)
        localStorage.setItem("favoritemovies",JSON.stringify(state.favoritemovies))
       
    },


    incementByAmount: (state, action) => {
        state += action.payload
    },

    


}

},

)

export const { setMoviesData, setFavoritList, setWatchlist, increment, incementByAmount,setDelet,decrement,incrementH ,decrementH,setDeletHeart} = counter.actions
export default counter.reducer 