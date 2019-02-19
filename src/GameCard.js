import React, { Component } from 'react';
import './styles/GameCard.css';

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state= {
      gameTitle: this.props.title,
      gameScore: this.props.metaScore,
      gameGenres: this.props.genres,
      gamePlatforms: this.props.platforms,
      gameMulti: this.props.multiplayer,
      gameImage: this.props.img,
      inLibrary: false
     }
  }
  toggleInfo = () => {
    console.log(this.state.gameTitle)
    this.props.setPopup(
      true,
      this.state.gameTitle,
      this.state.gameScore,
      this.state.gameGenres,
      this.state.gamePlatforms,
      this.state.gameMulti,
      this.state.gameImage
    )
  }
  changeLibraryStatus = () => {
    if (this.state.inLibrary) {
      this.setState({ inLibrary: false });
    } else {
      this.setState({ inLibrary: true });
    }
  }
  render() {
    let libraryButtonClass = "add-to-library " + this.state.inLibrary;
    let inLibraryStatus = " + ";
    if (this.state.inLibrary) {
      inLibraryStatus = " - ";
    } else {
      inLibraryStatus = " + ";
    }
    const style = { backgroundImage: 'url(' + this.props.img + ')', backgroundSize: 'cover' };
    return(
      <div className="game-card">
        <section className="img">
          <div className="gamecover" style={style}></div>
        </section>
        <section className="text-container">
          <h4>{this.props.title}</h4>
          <button className="game-more" onClick={this.toggleInfo}>
            More Info..
          </button>
        </section>
        <section className="btn">
          <button onClick={this.changeLibraryStatus} className={libraryButtonClass}>{inLibraryStatus}</button>
        </section>
      </div>
    )
  }
}