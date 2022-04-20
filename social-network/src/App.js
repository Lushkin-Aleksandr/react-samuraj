import './App.css';
import Navbar from "./components/Navbar/Navbar";
import React, {Suspense} from "react";
import {Routes, Route, HashRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import withRouter from "./hoc/withRouter";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";

//Lazy loading
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Routes>
                            <Route path='/profile'>
                                <Route
                                    path='/profile/:userId'
                                    element={<ProfileContainer/>}/>

                                <Route path=''
                                       element={<ProfileContainer/>}/>

                            </Route>
                            <Route
                                path='/dialogs/*'
                                element={<DialogsContainer/>}/>
                            <Route
                                path='/users/'
                                element={<UsersContainer/>}/>
                            <Route
                                path='/login/'
                                element={<Login/>}/>

                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = (props) => {
    return (
        <HashRouter >
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default SamuraiJSApp;
