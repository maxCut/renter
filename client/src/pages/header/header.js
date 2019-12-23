import React,{Component} from 'react'
import UnauthedHeader from './unauthed_header.js'
import Firebase, {FirebaseContext} from '../../firebase/f_index.js'

class Header extends Component {
    render()
    {
        return(
            <FirebaseContext.Consumer>
            {firebase =>
                {
                    return(<UnauthedHeader/>)
                }
            }
            </FirebaseContext.Consumer>
        )
    
    }

}
export default Header;
