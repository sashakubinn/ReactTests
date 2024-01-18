import { render, screen } from '@testing-library/react'
import { Users } from '../comonents/users/Users'

describe('Users', () => {
  test('component renders successfully', () => {
    render(<Users />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
  })
})
