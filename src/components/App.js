// Step 1: Import React, and Component from react.
// Step 2: Import render from react-dom
// Step 3: Import MoviesList from MoviesList

// Step 4: Write a class called App, extending Component.
// Step 5: Write a constructor function without passing anything into it.
// Step 6: Inside the constructor function, call super without passing anything into it.
// Step 7: Inside the constructor function, create a state on this, and set it to an object.
// Step 8: Inside the object, set a key to movies, and the value to an array of movies
// Step 9: Write a render function.
// Step 10: Inside the render function, write a return statement.
// Step 11: Inside the return statement, write a selfclosing tag called MoviesList
// Step 12: Inside the selfclosing tag, give it an attribute called movies, and pass it this.state.movies inside a set of curly bracket.
// Step 13: Outside the class, export the App class as a default.

import React, { Component } from 'react'
import { render } from 'react-dom'
import MoviesList from './MoviesList'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
	'The Dark Knight Returns',
	'The Godfather'
      ]
    }
  }

  render() {
    return (
      <div>
	{this.state.movies.map(movie => {
	    <MoviesList movie={movie} />)}
      </div>
    )
  }
}
