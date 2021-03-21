import React from 'react'
import 'twin.macro'

const PageHeader = ({ title }) => (
  <div
    tw="text-center bg-gray-200 text-5xl leading-10 p-8"
    style={{ fontFamily: 'TimelessBold' }}
  >
    {title}
  </div>
)

export default PageHeader
