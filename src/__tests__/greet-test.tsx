import { render, screen } from '@testing-library/react'
import { Greet } from '../comonents/greet/Greet'

describe('Greet', () => {
  test('renders with name', () => {
    render(<Greet />)
    const secondElement = screen.getByText(/Alex/i)
    expect(secondElement).toBeInTheDocument()
  })
})
