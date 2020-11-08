import React from 'react'

const PageHeader = ({ title }) => (
  <div
    className="text-center bg-gray-200 text-5xl leading-16 p-8"
    style={{ fontFamily: 'TimelessBold' }}
  >
    {title}
  </div>
)

export default PageHeader
