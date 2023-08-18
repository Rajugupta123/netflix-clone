import React from 'react'
import './Home.scss'

const Card = ({img})=>(
    <img className='card' src={img} alt='card img' />
)
const Row = (props)=>(
    <div className='row'>
        <h2>{props.title}</h2>
        <div>
        <Card img={"https://i.ytimg.com/vi/_InqQJRqGW4/sddefault.jpg"}/>
        <Card img={"https://i.ytimg.com/vi/_InqQJRqGW4/sddefault.jpg"}/>
        <Card img={"https://i.ytimg.com/vi/_InqQJRqGW4/sddefault.jpg"}/>
        <Card img={"https://i.ytimg.com/vi/_InqQJRqGW4/sddefault.jpg"}/>
        
        </div>
    </div>
)

const Home = () => {
  return (
  <section className="home">
    <div className="banner"></div>

    <Row title="popular on netflix" />

  </section>
  )
}

export default Home