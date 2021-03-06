import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherData } from '../actions/index';

class SearchBar extends Component {
	constructor (props) {
		super(props);

		this.state = { term: '' };
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchWeatherData(this.state.term);
		this.setState({ term: '' });
	}

	render () {
		return (
			<form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
				<input 
					type="text"
					placeholder="Get a five day forcast in your favorite city"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange.bind(this)} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeatherData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);