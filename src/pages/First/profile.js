import { Component } from "react"
import Card from 'Card'
import './profile.css'


// export const Profile=(props)=>{
//     return (
//         <h1><Card> </Card> </h1>
//     )

// }

export class Profile extends Component {


    componentDidMount() {
        //fetch api call using this.props.match.params.id
        // give me data for sanjeev
        this.setState()
    }


    render() {
        return (
            <div>
                {this.props.imgg}
                <div className='Card'>
                    {this.props.imgg}
                </div>
                <h1 class="profilename">{this.props.match.params.id}</h1>
                <h3 class="profilename">{}</h3>

            </div>

        )
    }
}