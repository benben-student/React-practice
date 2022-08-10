import React from "react";
import '../index.css'
import Frame from './components/Frame/Index'
import { Switch, Route, Redirect } from 'react-router-dom'
import { admirnRouters } from './routers'
import { isLogined } from './utils/auth'
function App() {
    return (isLogined() ? (
        <Frame>
            <Switch>
                {admirnRouters.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            render={routeProps => {
                                return <route.component {...routeProps} />
                            }}
                        />
                    )
                })}
                <Redirect to={admirnRouters[0].path} from="/admin" />
                <Redirect to="/404" />
            </Switch>
        </Frame>)
        : (
            <Redirect to="/login" />
        )
    )
}
export default App