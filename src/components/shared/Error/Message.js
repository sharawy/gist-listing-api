// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT
const MESSAGE_TYPES = { ERROR: 'alert-danger', INFO: 'alert-info' };
const Message = (props) => {

    return (
        <div className={'alert p-5 m-5 '+MESSAGE_TYPES[props.type]} role="alert">
            <i className="fas fa-exclamation-circle fa-2x"></i>
            <span className="h4 ml-3 alert-heading">Application Message</span>
            <p className="ml-5 mt-3">{props.message}</p>
        </div>
    );
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired
};

export { Message };