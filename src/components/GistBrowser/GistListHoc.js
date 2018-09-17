// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES

import { fetchGistByusernameAction } from '../state/actions/GistsActions';
import { GistList } from './GistList';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';

// COMPONENT

class GistListHoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);

    }

    componentDidMount() {
    }

    handleSearchSubmit(event) {
        if (this.state.username)
            this.props.fetchGistByusernameAction(this.state.username);
        event.preventDefault();
    }
    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSearchSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleUsernameChange} type="text" className="col-md-10 col-xs-6" placeholder="Username" />
                        <button type="submit" className="btn btn-primary col-md-2 col-xs-6">Search</button>

                    </div>
                </form>
                {
                    this.props.fetched && <GistList gists={this.props.gists} />
                }
                {
                    <LoadingIndicator empty={this.props.gists.length == 0} busy={this.props.fetching} failed={this.props.failed} message="Failed to fetch list of gists" />
                }

            </div>
        );
    }
}

GistListHoc.propTypes = {
    fetchGistByusernameAction: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    gists: PropTypes.array.isRequired
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, gists } = state.gists;
    return { fetching, fetched, failed, gists };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchGistByusernameAction }, dispatch)
);



// EXPORT COMPONENT

export default connect(mapStateToProps, mapDispatchToProps)(GistListHoc);
