import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Paragraph from './paragraph'

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <span style={{ fontFamily: 'TimelessBold' }}></span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
  },
}

const RichText = ({ json }) => documentToReactComponents(json, options)

export default RichText
