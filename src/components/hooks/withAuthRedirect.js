import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// export const withAuthRedirect = (Component) => {
//   const RedirectComponent = (props) => {
// const navigate = useNavigate();

// useEffect(() => {
//   if (!props.isAuth) {
//     navigate('/login');
//   }
// }, [props.isAuth, navigate]);

//     return <Component {...props} />;
//   };

//   return RedirectComponent;
// };

export function withAuthRedirect(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        useEffect(() => {
            if (!props.isAuth) {
                navigate('/login');
            }
        }, [props.isAuth, navigate]);
        return (
            <Component {...props} router={{ location, navigate, params }} />
        );
    }

    return ComponentWithRouterProp;
}

