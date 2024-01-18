import { render, screen } from '@testing-library/react'
import { CounterTwo } from '../comonents/counter-second/CounterSecond'
import user from '@testing-library/user-event'

describe('Second Counter', () => {
  test('first', () => {
    render(<CounterTwo count={0} />)
    const headingElement = screen.getByRole('heading')
  })
  test('handler are called', async () => {
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />,
    )
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    const decrementButton = screen.getByRole('button', {
      name: 'Decrement',
    })
    await user.click(incrementButton)
    await user.click(decrementButton)
    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
