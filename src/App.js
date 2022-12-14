import axios from "axios";
import React, { Component } from "react";
import Filter from './Filter';
import Popup from "./Popup";
import Results from './Results';

class App extends Component {
  constructor() {
    super()

    this.state = {
      selectedSource: 'trackerGG',
      allData: {},
      allMapNames: [],
      abilities: {},
      favorites: JSON.parse(localStorage.getItem('favorites') || '{}'),
      popupData: null,
      selectedMap: 'any',
      selectedAgent: null,
      selectedAbility: null,
      selectedSide: 'all',
      selectedFavorite: 'all',
    }

    this.mounted = false
  }

  addFavorite(videoID) {
    const favorites = this.state.favorites
    favorites[videoID] = true

    this.setState({
      ...this.state,
      favorites,
    })

    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  removeFavorite(videoID) {
    const favorites = this.state.favorites
    delete favorites[videoID]

    this.setState({
      ...this.state,
      favorites,
    })

    localStorage.setItem('favorites', JSON.stringify(favorites))
    // localStorage.removeItem('this.state.favorites[videoID]')
  }

  componentDidMount() {
    if (!this.mounted) {
      this.mounted = true

      Promise.all([
        axios("http://localhost:3002/lineups"),
        axios("http://localhost:3002/mapNames"),
        axios("http://localhost:3002/abilities"),
      ])
      .then(([lineupsRes, mapNamesRes, abilitiesRes]) => {
        this.setState({
          ...this.state,
          allData: lineupsRes.data,
          allMapNames: mapNamesRes.data,
          abilities: abilitiesRes.data,
        })
      })
    }
  }

  setGlobalState(newState) {
    this.setState({
      ...this.state,
      ...newState
    })
  }

  openPopup(data) {
    this.setState({
      ...this.state,
      popupData: data,
    })
  }

  closePopup() {
    this.setState({
      ...this.state,
      popupData: null,
    })
  }

  render() {
    return (
      <>
        <Filter 
        globalState={this.state} 
        setGlobalState={this.setGlobalState.bind(this)}
        />
        <Results 
          globalState={this.state} 
          setGlobalState={this.setGlobalState.bind(this)}
          openPopup={this.openPopup.bind(this)}
          addFavorite={this.addFavorite.bind(this)}
          removeFavorite={this.removeFavorite.bind(this)}
        />
        <Popup 
          globalState={this.state} 
          selectedAgent={this.state.selectedAgent}
          popupData={this.state.popupData} 
          closePopup={this.closePopup.bind(this)}
        />
      </>
    )
  }
}

export default App