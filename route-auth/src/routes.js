import React from  'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ () => <h1>Ola Mundo</h1> }/>
        </Switch>
    </BrowserRouter>
)

export default Routes