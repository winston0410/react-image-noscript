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

// const Img = withNoScript(
//   _Img
// )
//
// // Render prop pattern
//
// const NoScript = ({ children, ...attr }) => {
//   const srcPath = defaultWhenEmpty(attr.src)(attr.dataSrc)
//   const modifiedAttr = {
//   ...attr, src: srcPath
//   }
//
//   return (
//     <React.Fragment>
//       {children(attr)}
//       <noscript>
//       {children(modifiedAttr)}
//       </noscript>
//     </React.Fragment>
//   )
// }
//
// export default NoScript
//
// const Img = ({ ...attr }) => (
//   <NoScript>
//     {(attr) => <_Img {...attr}/>}
//   </NoScript>
// )
