import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'

describe('Greet', () => {
  it('should render Greet with the name when name is provided', () => {
    render(<Greet name="Alex" />)

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/hello Alex/i)
  })

  it('should render login button when name is not provided', () => {
    render(<Greet />)

    const heading = screen.getByRole('button')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/login/i)
  })
})
