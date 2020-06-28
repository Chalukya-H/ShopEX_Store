import React from 'react'
import {Link} from 'react-router-dom'
// import logo from '../../media/download-11.jpg'
import logo from '../../media/Logo-1.PNG'
import CategoryMenu from './categoryMenu'
import {startGetUser} from '../../actions/userAction'
import {connect} from 'react-redux'

class TopMenu extends React.Component{
    constructor(){
        super()
        this.state ={
            role : ''
        }
    }

    componentDidMount =()=>{
        this.props.dispatch(startGetUser()) 
        const refersh =  setInterval( () =>{  
            if(this.props.users.length ) {             
                clearInterval(refersh)
                this.setState({role :this.props.users[0].role})
                console.log(this.props.users[0].role)
            }
        },1000)
    }

     handleLogout = () =>{
        localStorage.removeItem('token')
         window.location.href ='/'
      }

    render() {
        return (
            <div>
              <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/"> <img src = {logo} alt ='' style ={{height:'80px'}}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">     
                        <div className="input-group mt-2 w-75">
                            <input className="form-control " type="text" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                            <button className="btn btn-md btn-outline-warning " type="submit">Search</button>
                            </div>
                        </div>
    
                        <ul className="navbar-nav  ml-3" >
                            {
                                localStorage.getItem('token') ? 
                                    <div className ='navbar-nav '>                                      
                                        {                                                
                                            this.state.role ==='Admin' ?                                                
                                                <div className="dropdown ml-3 mr-2 ">
                                                    <button type="button" className="btn btn-success  dropdown-toggle"
                                                     data-toggle="dropdown"   aria-haspopup="true" aria-expanded="false">
                                                        Account
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <Link to ='/account' className ='dropdown-item' > Profile </Link>
                                                        <Link to ='/products/add' className ='dropdown-item' > Add Product </Link>
                                                        <Link to ='/orders' className ='dropdown-item' > Orders Summary </Link>
                                                        <Link to ='/categories/list' className ='dropdown-item' > Categories List </Link>
                                                        <Link to ='/categories/update' className ='dropdown-item' >Add/Update Category </Link>
                                                        <Link to ='/products/list' className ='dropdown-item' > Products Summary </Link>                                                            
                                                    </div>  
                                                                        
                                                </div>
                                            :                                             
                                                <li className="nav-item active">
                                                    <Link to ='/account' className ='nav-link navbar-brand ' >Account </Link>                                                    
                                                </li>
                                            
                                        }
                                        <li className="nav-item active">
                                            <Link to ='/cart' className ='nav-link navbar-brand fa fa-shopping-cart'
                                             style ={{display: this.state.role ==='Admin' ? 'none' : ''}} >  </Link>
                                        </li>

                                        <li className="nav-item active">
                                            <Link to ='#' onClick ={this.handleLogout} 
                                                className ='nav-link navbar-brand fa fa-sign-out' >      </Link>
                                        </li>
                                       
                                </div>
                                :
                                <div className ='navbar-nav'>
                                    <li className="nav-item active">
                                        <Link to ='/login' className ='nav-link navbar-brand'  > Signin </Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to ='/register' className ='nav-link navbar-brand' > SignUp </Link>
                                    </li>
                                   
                                </div>                        
                            }                         
                        </ul> 
                    </div>
                 </nav>
                </div>
              
                <CategoryMenu/>
               
            </div>
          
        )
    }
}

const mapStateToProps = (state) =>{
    return  {
        users : state.users
    }

}

export default connect(mapStateToProps)(TopMenu)