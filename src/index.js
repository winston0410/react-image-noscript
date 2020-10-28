import React from 'react'
import {
  defaultWhenEmpty
} from '@blackblock/common-utilities'

const withNoScript = (Component) => ({ ...attr }) => {
  const srcPath = defaultWhenEmpty(attr.src)(attr.dataSrc)

  return (
    <React.Fragment>
      <Component {...attr}/>
      <noscript>
        <Component {...attr} src={srcPath}/>
      </noscript>
    </React.Fragment>
  )
}

export default withNoScript
