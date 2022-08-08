import React from "react";
import '../index.css'
import Frame from './components/Frame/Index'
import { Switch, Route, Redirect } from 'react-router-dom'
import { admirnRouters } from './routers'
function App() {
    return (
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
                <Redirect to="/404" />
            </Switch>
        </Frame>
    )
}
export default App