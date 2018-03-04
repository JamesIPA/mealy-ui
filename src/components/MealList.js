import React, { Component } from 'react';
import axios from 'axios';
import Meal from './Meal'

class MealList extends Component {

    constructor(props){
        super(props)
        this.state = {};
    }

    componentDidMount() {
        this.serverRequest =
        axios
        .get('http://localhost:8080/raw')
        .then(response => {
            this.setState({
                meals : response.data.meals,
                shopping : response.data.shopping
            })
        })

        console.log(this.state.meals)
    }

    render() {
        if (!this.state.meals)
            return (<p>Loading...</p>)

        const listItems = this.state.meals.map((meal) => {
          return <Meal {...meal}/>
        })

        return(
            <div>
                {listItems}
            </div>
        )
    }
}

export default MealList