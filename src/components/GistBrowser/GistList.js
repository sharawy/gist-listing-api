// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { GistListItem } from './GistListItem';


// COMPONENT

const renderList = gists => (
    <div className="list-group animated fadeIn">
        {gists.map(gist => renderListItem(gist))}
    </div>
);

const renderListItem = gist => (
    <Fragment key={gist.id}>
        <GistListItem created_at={gist.created_at} files={gist.files} description={gist.description} comments={gist.comments} id={gist.id} />
    </Fragment>
);

const GistList = (props) => (
    <div>
        <p>Tip: click on card to access gist details</p>
        <Fragment>
            {renderList(props.gists)}
        </Fragment>
    </div>
);

GistList.propTypes = {
    gists: PropTypes.array.isRequired
};

export { GistList };