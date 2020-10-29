import React from 'react'
import {
  defaultWhenEmpty
} from '@blackblock/common-utilities'

const NoScript = ({ children, ...attr }) => {
  const srcPath = defaultWhenEmpty(attr.src)(attr.dataSrc)
  const modifiedAttr = {
    ...attr, src: srcPath
  }

  return (
    <React.Fragment>
      {children(attr)}
      <noscript>
        {children(modifiedAttr)}
      </noscript>
    </React.Fragment>
  )
}

export default NoScript
