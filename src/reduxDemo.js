import React, { Component } from 'react'
import { createStore } from 'redux'

export default class ReduxDemo extends Component {
	render() {

		const reducer = (state, action) => {
			if(action.type === "ATTACK") {
				return action.payload
			}
			if(action.type === "ATTACK2") {
				return action.payload
			}
			if(action.type === "ATTACK3") {
				return action.payload
			}
			if(action.type === "ATTACK4") {
				return action.payload
			}
			return state
		}

		const store = createStore(reducer, "Peace")

		store.subscribe(() => {
			console.log("Store is now " + store.getState())
		})

		
		store.dispatch({type: "ATTACK", payload: "Iron Man"})
		store.dispatch({type: "ATTACK2", payload: "Super Man"})
		store.dispatch({type: "ATTACK3", payload: "Spider Man"})
		store.dispatch({type: "ATTACK4", payload: "Hulk"})
		return (
			<div>
				Test
			</div>
			)
	}
}