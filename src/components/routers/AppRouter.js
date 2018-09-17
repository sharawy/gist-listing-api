// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { GistListPage, GistDetailsPage } from '../pages/GistPages';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <Switch>
                <Route path='/' component={GistListPage} exact={true} />
                <Route path={'/:gistId'} component={GistDetailsPage} exact={true} />

                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);