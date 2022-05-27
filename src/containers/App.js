import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
import { Component } from "react"
import './App.css'


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            search: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {this.setState({robots : users})})
      
    }

    onSearchChange = (event) => {
        this.setState({search : event.target.value})
    }

    render (){   
        const {robots,search } = this.state
        const resultRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(search.toLowerCase())
        })

        return !robots.length ? 
            <h1 className='tc mt5'>loading ...</h1>
        :
        (
            <div className="tc">
                <h1 className="f2">Par Robos</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={resultRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
        

    }
}

export default App