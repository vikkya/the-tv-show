import React from 'react';
import Series from '../../Container/Series'
import {Switch, Route} from 'react-router-dom';
import SingleSeries from '../../Container/SingleSeries';

const Main = (props) => (
    <Switch>
        <Route exact path="/" component={Series} />
        <Route path="/series/:id" component={SingleSeries} />
    </Switch>
)

export default Main;