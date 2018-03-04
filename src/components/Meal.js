import React, { Component } from 'react'

class Meal extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.setState({
            meal: this.props
        })
    }

    render() {
        if (!this.state.meal)
            return (<h1>Loading...</h1>)

        console.log(this.state.meal)

        return (
            <div className = "meal">
                <h2>{this.state.meal.name}</h2>
            </div>
        )
    }
}

export default Meal