// import React from 'react';
// import { Route } from 'react-router-dom';

// function PrivateRoute(props) {
//   const { children, ...rest } = props;
//   return (
//     <Route {...rest}>
//       {children}
//     </Route>
//   );
// }
import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = null

    return auth ? <Outlet /> : <Navigate to="/login" />
}
export default PrivateRoute;