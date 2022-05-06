/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
// HOC/withAuth.jsx


const withAuth = WrappedComponent => {
  return props => {
    return <WrappedComponent {...props} />
  }
}

export default withAuth
