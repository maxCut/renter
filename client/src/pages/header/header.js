import React,{Component} from 'react'
import UnauthedHeader from './unauthed_header.js'
import AuthedHeader from './authed_header.js'
import Firebase, {FirebaseContext} from '../../components/firebase'

class Header extends Component {
    render()
    {
        return(
            <FirebaseContext.Consumer>
            {firebase =>
                {
                    var user =  firebase.getUser()
                    if(user)
                    {
                        return(<AuthedHeader/>)
                    }
                    else
                    {
                        return(<UnauthedHeader/>)
                    }
                }
            }
            </FirebaseContext.Consumer>
        )
    
    }

}
export default Header;
