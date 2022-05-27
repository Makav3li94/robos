import {Component} from 'react'

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError:true})
        console.log(error);
    }

    render() {
        if(this.state.hasError){
            return <h1>Opppppps, somethings wrong !</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundry