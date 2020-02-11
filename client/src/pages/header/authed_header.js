import React,{Component} from 'react'

class AuthedHeader extends Component {
    render()
    {
        return(
            <FirebaseContext.Consumer>
            {firebase =>
                {
                    return(
                        <div className = "Header">
                            <p>Welcome! User:{firebase.getUser()}</p>
                        </div>
                    )
                }
            }
            </FirebaseContext.Consumer>

        )
    
    }

}
export default AuthedHeader;
