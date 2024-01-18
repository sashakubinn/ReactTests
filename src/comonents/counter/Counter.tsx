import { useState } from 'react'
import s from './Counter.module.css'

export function Counter() {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)
  return (
    <div className={s.count}>
      <h1> {count} </h1>
      <button onClick={() => setCount(count + 1)}> Increment </button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  )
}
