import { render, screen } from '@testing-library/react'
import Hello from '../../src/components/Hello'

describe('Hello', () => {
  it('renders Hello component', () => {
    render(<Hello />)
    const helloElement = screen.getByText(/Hello/i)
    expect(helloElement).toBeInTheDocument()
  })
})
