import React from 'react'

const PageHeader = ({ title }) => (
  <div
    className="text-center h-32 bg-gray-200 text-5xl leading-32"
    style={{ fontFamily: 'TimelessBold' }}
  >
    {title}
  </div>
)

export default PageHeader
