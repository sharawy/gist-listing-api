// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT
const FilesComponet = ({ files }) => {

    var arr = [];
    Object.keys(files).forEach(function (key) {

        arr.push(files[key]);
    });


    return (<div>
        {
            arr.map((file) =>
                <span className={'badge badge-secondary ' + file.language} key={file.filename}>{file.language}</span>
            )
        }

    </div>);
};
FilesComponet.propTypes = {

    files: PropTypes.object,
};

const GistListItem = ({ id, description, comments, created_at, files }) => (
    <a href={'/' + id} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">id: {id}</h5>
            <small className="text-muted">Created:{created_at}</small>
            <span  className="btn btn-info">
                Comments <span className="badge badge-light">{comments}</span>
            </span>
        </div>
        <small className="text-muted">Description: {description}</small>
        <FilesComponet files={files} />
    </a>
);

GistListItem.propTypes = {
    description: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    files: PropTypes.object,
    id: PropTypes.string.isRequired
};

export { GistListItem };