import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from '../comonents/skills/Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']
  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })
  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getAllByRole('listitem')
    expect(listElement).toHaveLength(skills.length)
  })
  test('render login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })
  test('Not render start learning button', () => {
    render(<Skills skills={skills} />)
    const startLearning = screen.queryByRole('button', {
      name: /start learning/i,
    })
    expect(startLearning).not.toBeInTheDocument()
  })
  test('Start learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)
    const startLearning = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      },
    )
    expect(startLearning).toBeInTheDocument()
  })
})
