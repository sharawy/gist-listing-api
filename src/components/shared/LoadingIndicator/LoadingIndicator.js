// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Error/Message';


// COMPONENT

const LoadingIndicator = (props) => (
    <div>
        {
            props.busy &&
            <div style={{ top: '50%', left: '50%', textAlign: 'center', color: 'dodgerblue', position: 'absolute', transform: 'translate(-50%, 0)' }}>
                <i className="fa fa-spinner fa-spin fa-4x fa-fw"></i>
            </div>
        }
        {
            props.failed && <Message message={props.message} type="ERROR" />
        }
        {
            props.empty && <Message message="No Result" type="INFO" /> 
        }
    </div>
);


// CONFIGURE COMPONENT PROP TYPES

LoadingIndicator.propTypes = {
    busy: PropTypes.bool,
    failed: PropTypes.bool,
    message: PropTypes.string,
    empty:PropTypes.bool
};


// EXPORT COMPONENT

export { LoadingIndicator };