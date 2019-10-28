import React from "react";
import "./todoitem.css";

// https://scrimba.com/p/p4Mrt9/cQnMDHD
//constructor is where you initailize values
//first thing to do in constructor is make a call to a global function called super()
//super() goes to the parent class aka the super class
//it grabs goodies from the parent class and makes them accessible to us in our component

class TodoItem extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			answer: "Yep",
			checkboxStatus: this.props.item.done
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(){
		this.setState({
			checkboxStatus: !this.state.checkboxStatus
		})
	}

	render(){
		const completedStyle = {
			fontStyle: "italic",
			color: "darkgreen",
			textDecoration: "strikethrough"
		}

		return (
			<section className="checkboxGroup">
	            <input
	            	type="checkbox"
	            	checked={this.state.checkboxStatus}
	            	onChange={this.handleChange} />
	            <p style={this.state.checkboxStatus ? completedStyle : null}>{this.props.item.text}</p>
	         </section>
		)

	}

}


export default TodoItem