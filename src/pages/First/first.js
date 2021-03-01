import { Component } from "react"

export class Profile extends Component{


    componentDidMount() {
        //fetch api call using this.props.match.params.id
        // give me data for sanjeev
        this.setState()
    }


    render(){
        return(<h1>This is my Category Page for { this.props.match.params.id }
        <div>
        {this.person.name}
        </div>
      
        
        </h1>)
    }
}



export const First=()=>{
    return (
        <h1>this is my first page</h1>
    )

}