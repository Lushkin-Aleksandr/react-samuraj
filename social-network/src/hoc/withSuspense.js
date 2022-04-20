import {Suspense} from 'react';



export const withSuspense = (Component) => {

    return (props) => {
        return (
            <Suspense fallback={<h1>Loading...</h1>}>
                <Component {...props}/>
            </Suspense>
        )
    }


}