import React,{Component} from 'react'

class UnauthedHeader extends Component {
    render()
    {
        return(
            <div className = "Header">
                <p>Welcome!</p>
                <a href = '/login'>Login</a>
            </div>
        )
    
    }

}
export default UnauthedHeader;
