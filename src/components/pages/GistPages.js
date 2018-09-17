// IMPORT PACKAGE REFERENCES
import React from 'react';

// IMPORT PROJECT REFERENCES

import GistListHoc from '../GistBrowser/GistListHoc';
import GistDetails from '../GistBrowser/GistDetalis';


// COMPONENT

export const GistListPage = () => (
    <div className="p-3">
        <GistListHoc />
    </div>
);

export const GistDetailsPage = () => (
    <div className="p-3">
        <GistDetails />
    </div>
);