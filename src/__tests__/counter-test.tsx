import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Counter } from '../comonents/counter/Counter'

describe('Counter', () => {
  test('click counter', () => {
    render(<Counter />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementButton).toBeInTheDocument()
  })
  test('increment = 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })
  test('renders 1 counter', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.click(incrementButton)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('1')
  })
  test('renders a count 10 after click set button', async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    await user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)
    const setCount = screen.getByRole('button', {
      name: 'Set',
    })
    await user.click(setCount)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('10')
  })
  test('elements are focused', async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.tab()
    expect(incrementButton).toHaveFocus()
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
  })
})
