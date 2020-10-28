import React from 'react'

const withNoScript = (Component) => ({ ...attr }) => {
  const clonedComponent = React.cloneElement(Component, { ...attr })

  // {clonedComponent}

  return (
    <React.Fragment {...attr}>
      <Component {...attr}/>
      <noscript>
        <Component {...attr}/>
      </noscript>
    </React.Fragment>
  )
}

export default withNoScript
