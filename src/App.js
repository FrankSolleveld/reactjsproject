import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
// import { ReactComponent } from '*.svg';

// Should be presentational component
const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" alt="" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight:'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}

const CardList = (props)=> {
  return (
    <div>
      {props.cards.map(card => <Card {...card}/>)}
    </div>
  )
}

export default CardList