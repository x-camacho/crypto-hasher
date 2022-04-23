import React, { useEffect } from 'react'
import axios from 'axios';
import { TrendingCoins } from '../config/api';
import { useState } from 'react';
import AliceCarousel from "react-alice-carousel";
import { Link } from 'react-router-dom';
import "../styles/Carousel.css"

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(d{3})+(?!\d))/g, ",")
}

const Coinboard = () => {

    const [trending, setTrendingCoins] = useState([]);

    const fetchTrendingCoins =async () => {
        const { data }  = await axios.get(TrendingCoins());

        setTrendingCoins(data);
    };
console.log(data)
    useEffect(() => {
        fetchTrendingCoins();
    }, []);

//     const items = trending.map((coin) => {
//         let profit = coin.price_change_percentage_24h >= 0;

//         return(
//             <Link className='carouselItem' to={`/coins/${coin.id}`}>
//                 <img 
//                     src={coin?.image}
//                     alt={coin.name}
//                     height='80' 
//                     style={{ marginBottom: 10 }}
//                 />
//                 <span>
//                     {coin?.symbol}
//                     &nbsp;
//                     <span
//                         style={{
//                             color: profit > 0 ? "rgb(14, 203, 129)" : "red",
//                             fontWeight: 500,
//                         }}
//                     >
//                         {profit && "+"} ${coin?.price_change_percentage_24h.toFixed(2)}
//                     </span>
//                 </span>
//                 <span style={{ fontSize: 22, fontWeight: 500 }}>
//                     ${numberWithCommas(coin?.current_price.toFixed(2))}
//                 </span>
//             </Link>
//         );
//     });

//     const responsive = {
//         0: {
//             items: 2,
//         },
//         512: {
//             items: 4,
//         },
//     };


//   return (
//     <div>
//         <AliceCarousel 
//             mouseTracking
//             infinite
//             autoPlayInterval={1000}
//             animationDuration={1500}
//             disableButtonsControls
//             disableDotsControls
//                 responsive={responsive}
//                 autoPlay
//                 items={items}
//         />
//     </div>
//   )
// }

export default Coinboard