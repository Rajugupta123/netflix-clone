import React, { useEffect, useState } from 'react'
import './Home.scss'
import {Link} from "react-router-dom"
import axios from 'axios'

const apiKey = "1d1d3ed9b0edcd4aa58c06c9f110d2f8"
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/w500"
const popular = "popular"
const upcoming = "upcoming"
const now_playing = "now_playing"
const top_rated = "top_rated"

const Card = ({img})=>(
    <img className='card' src={img} alt='card img' />
)

const Row = ({title,arr=[] })=>(
    <div className='row'>
        <h2>{title}</h2>
        <div>
        {
          arr.map((item,index)=>(
            // <Card img={item.img} key={index} />
            <Card img={`${imgUrl}/${item.poster_path}`} key={index} />
          ))
        }
        
        </div>
    </div>
)

const Home = () => {

  const [popularMovies,setPopularMovies] = useState([])
  const [upcomingMovies,setUpcomingMovies] = useState([])
  const [nowPlayingMovies,setNowPlayingMovies] = useState([])
  const [topRatedMovies,setTopRatedMovies] = useState([])
  const [genre,setGenre] = useState([])  
  
  useEffect(() => {
    
    const fetchPopularMovies = async()=>{
       const {data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}&language=en-US&page=3`)
      setPopularMovies(results)
    }

      const UpcomingMovies = async()=>{
        const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}&language=en-US&page=1`)
        setUpcomingMovies(results)
    }

      const NowPlayingMovies = async()=>{
        const {data:{results}} = await axios.get(`${url}/movie/${now_playing}?api_key=${apiKey}&language=en-US&page=1`)
        setNowPlayingMovies(results)
    }

      const TopRatedMovies = async()=>{
        const {data:{results}} = await axios.get(`${url}/movie/${top_rated}?api_key=${apiKey}&language=en-US&page=1`)
        setTopRatedMovies(results)
      }

      // https://api.themoviedb.org/3/genre/movie/list?api_key=1d1d3ed9b0edcd4aa58c06c9f110d2f8&language=en-US&page=1

      const GetAllGenre = async()=>{
        const {data:{genres}} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}&language=en-US&page=1`)
        setGenre(genres)
        //console.log(genres)
      }


    
    fetchPopularMovies()
    UpcomingMovies()
    NowPlayingMovies()
    TopRatedMovies()
    GetAllGenre()

  }, [])
  

  return (
  <section className="home">
    <div className="banner" style={{
      backgroundImage: popularMovies[0]? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`: "rgb(16,16,16)"
    }} >

      {popularMovies[0]&&<h1>{popularMovies[0].original_title}</h1>}
      {popularMovies[0]&&<p>{popularMovies[0].overview}</p>}



    </div>
    
        
    
    <Row title="Now Playing" arr={nowPlayingMovies} />
    
    <Row title="Top Rated" arr={topRatedMovies} />
    <Row title="Popular" arr={popularMovies} />
    <Row title="Upcoming" arr={upcomingMovies} />
    <div className="genreBox">
  
      {
        genre.map((item,index)=>(
          <Link to={`/genre/${item.id}`} key={index}>{item.name}</Link>
        ))
      }
    </div>
    

  </section>
  )
}

export default Home