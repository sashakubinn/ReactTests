import { render, screen } from '../test-utils'
import { MuiMode } from '../comonents/mui/Mui'

describe('Mui Mode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })
})
