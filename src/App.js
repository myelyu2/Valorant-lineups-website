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

      popupData: {},

      selectedMap: 'any',
      selectedAgent: null,
      selectedAbility: null,
      selectedSide: null,
      selectedFavorite: false,
    }

    this.mounted = false
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
        />
        <Popup 
          popupData={this.state.popupData} 
          closePopup={this.closePopup.bind(this)}
        />
      </>
    )
  }
}

export default App