// import { useState } from "react";

import Commodity from './components/commodity'
import Search from './components/search'
import './App.css'

export interface DataType {
  category: 'Fruits' | 'Vegetables'
  price: string
  stocked: boolean
  name: string
}

function App() {
  // const [count, setCount] = useState(0);

  const data: DataType[] = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
  ]

  return (
    <div className="mx-auto flex w-[300px] flex-col items-start">
      <Search></Search>

      <div className="flex w-full font-bold">
        <h1 className="flex-1">Name</h1>
        <h1 className="flex-1">Price</h1>
      </div>

      <Commodity data={data}></Commodity>
    </div>
  )
}

export default App
