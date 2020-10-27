import React from 'react'

const NoscriptImage = (Component) => ({...attr}) => {
  const clonedComponent = React.cloneElement(Component, {...attr})

  return (
    <React.Fragment {...attr}>
      <Component {...attr}/>
      <noscript>
        {clonedComponent}
      </noscript>
    </React.Fragment>
  )
}

export default NoscriptImage
