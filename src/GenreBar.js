import React, { Component } from 'react';
import CheckBox from './CheckBox.js';

export default class GenreBar extends Component {
	constructor(props) {
		super(props);
		this.state = { showGenres: false }
	}
	toggleGenres = () => {
		this.setState({ showGenres: this.state.showGenres ? false : true })
	}
	render() {
		let hideGenres = this.state.showGenres ? "genre-check" : "genre-check hide";
		let buttonSelector = this.props.genresToFilter.length ? "button current" : "button";
		let genres = this.props.genres.sort();
		return (
			<div className="genre-bar search-section">
				<form className={hideGenres}>
					{
						genres.map((val, i) => {
							return <CheckBox name={val}
								updateChecks={this.props.updateChecks}
								class="genresToFilter check-box"
								key={i} />
						})
					}
				</form>
				<button onClick={this.toggleGenres} className={buttonSelector}>GENRES</button>
			</div>
		)
	}
}