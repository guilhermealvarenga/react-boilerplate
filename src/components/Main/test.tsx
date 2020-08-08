import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render de heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
