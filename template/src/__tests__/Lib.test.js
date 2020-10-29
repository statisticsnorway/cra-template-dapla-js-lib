import React from 'react'
import { render } from '@testing-library/react'

import Lib from '../Lib'

const setup = () => {
  const { getByText } = render(<Lib />)

  return { getByText }
}

test('Does not crash', () => {
  setup()
})
