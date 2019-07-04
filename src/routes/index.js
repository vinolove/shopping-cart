import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Cart, List } from '../pages';

export class AppRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={()=>{
                    return <Redirect to="/list" />
                    }} />
                    <Route exact path="/list" component={List} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
          </BrowserRouter>
        )
    }
}
