import { fetchData } from '../utils/fetchData'
import { useState } from 'react'
import {ImSearch} from 'react-icons/im'

export const getStaticProps = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const data = await response.json()

  return { 
    props : {
      coinData : data
    }
   }
}

export default function Home({CoinData}) {
  const handleSearch =  async () => {
        
  }
  const [query, setQuery] = useState('')
  console.log(CoinData)
  return (
  <section>
    <section>
            <h1  className="text-5xl md:text-7xl my-4 text-center text-yellow font-mono font-bold ">
                Search coins
            </h1>

            <form className='mx-auto flex justify-center items-center'>
                <input
                 className='w-4/5 md:w-3/5 h-9 md:h-12 rounded-l-lg'
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <button className='h-9 md:h-12 w-9 md:w-12 flex justify-center items-center bg-silver rounded-r-lg'
                
                >
                    <ImSearch />
                </button>
            </form>
    </section>
  </section>
  )
}


