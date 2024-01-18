export type CounterTwoProps = {
  count: number
  handleIncrement?: () => void
  handleDecrement?: () => void
}

export const CounterTwo = ({
  count,
  handleDecrement,
  handleIncrement,
}: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  )
}
