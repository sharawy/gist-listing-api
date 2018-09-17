// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { fetchGistDetailsAction } from '../state/actions/GistsActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';


// COMPONENT

const GistComponent = ({ gist }) => (
    <div>
        <div>
            {/* {gist.id} */}
        </div>
        <h3>Forks</h3>
        <div className="card-group">
            {
                gist.forks.reverse().slice(0, 3).map((fork) =>
                    <div key={fork.id} className="card row">
                        <img className="card-img-top" src={fork.user.avatar_url} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{fork.user.login}</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated {fork.updated_at}</small>
                        </div>
                    </div>

                )
            }
        </div>
    </div>
);

GistComponent.propTypes = {

    gist: PropTypes.object.isRequired
};
class GistDetails extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchGistDetailsAction(this.props.match.params.gistId);

    }

    render() {
        console.log(this.props.gist);
        return (
            <div>
                {
                    this.props.fetched && this.props.gist && <GistComponent gist={this.props.gist} />
                }
                {
                    <LoadingIndicator empty={this.props.gist} busy={this.props.fetching} failed={this.props.failed} message="Failed to get gist details" />
                }

            </div>
        );
    }
}

GistDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            gistId: PropTypes.string.isRequired
        })
    }),
    fetchGistDetailsAction: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    gist: PropTypes.object.isRequired
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, gist } = state.gist;
    return { fetching, fetched, failed, gist };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchGistDetailsAction }, dispatch)
);



// EXPORT COMPONENT

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GistDetails));