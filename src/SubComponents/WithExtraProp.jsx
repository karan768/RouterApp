import React from 'react'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => {
    console.log(props, 'props')
    const newProps = { ...props, extraProp: 'I am an extra prop!' };
    console.log(newProps, 'newProps')
    return (
        <WrappedComponent {...newProps} />
    )
  }

  return hocComponent
}
