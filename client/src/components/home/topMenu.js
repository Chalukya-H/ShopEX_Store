import React from 'react'
import {Link} from 'react-router-dom'
// import logo from '../../media/download-11.jpg'
import logo from '../../media/Logo-1.PNG'
import CategoryMenu from './categoryMenu'
import {startGetUser} from '../../actions/userAction'
import {getProductsbyQuery} from '../../actions/productAction'
 
import {connect} from 'react-redux'

class TopMenu extends React.Component{
    constructor(){
        super()
        this.state ={
            role : '',
            searchText:''
        }
    }

    componentDidMount =()=>{
        this.props.dispatch(startGetUser()) 
        const refersh =  setInterval( () =>{  
            if(this.props.users.length ) {             
                clearInterval(refersh)
                this.setState({role :this.props.users[0].role})
               
            }
        },1000)
    }

     handleLogout = () =>{
        localStorage.removeItem('token')
         window.location.href ='/'
      }

      handleSearch =(e) =>{
          this.setState ({searchText : e.target.value})
      }

     handleSubmitSearch = (e) =>{
        window.location.href = `/search/q=${this.state.searchText}`
     }

    render() {
        return (
            <div>
              <div>
                <nav className="navbar navbar-expand-lg navbar-dark " style = {{backgroundColor:'#000000'}}>                 
                    <a className="navbar-brand" href="/"> <img src = {logo} alt ='' style ={{height:'80px'}}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">                    
                        <div className="header__search justify-content-center" style={{width: '100%'}}>
                            <form className="form-inline mr-auto" style= {{textAlign: "center",display: "inherit"}}>
                                <input className="form-control input-width mr-sm-2"  id ='searchbar'
                                    type="search" placeholder="Search by product name" aria-label="Search"  value ={this.state.searchText}  
                                        onChange = {this.handleSearch} />
                                <button className="btn btn-md btn-outline-warning my-2 my-sm-0" 
                                    type="submit" onClick = {this.handleSubmitSearch} >Search</button>
                            </form>
                        </div>
                        <ul className="navbar-nav  ml-auto" >
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
                                            <div className="dropdown ml-3 mr-2 ">
                                                <button type="button" className="btn btn-primary  dropdown-toggle"
                                                data-toggle="dropdown"   aria-haspopup="true" aria-expanded="false">
                                                    Account
                                                </button>
                                                <div className="dropdown-menu">
                                                    <Link to ='/account' className ='dropdown-item' > Profile </Link>
                                                    <Link to ='/orders/summary' className ='dropdown-item' > My Orders </Link>                                                                                                        
                                                </div>  
                                            </div>                                               
                                        }
                                        <li className="nav-item active">
                                            <Link to ='/cart' className ='nav-link navbar-brand fa fa-shopping-cart ml-3'
                                             style ={{display: this.state.role ==='Admin' ? 'none' : ''}} > Cart </Link>
                                        </li>

                                        <li className="nav-item active">
                                            <Link to ='#' onClick ={this.handleLogout} 
                                                className ='nav-link navbar-brand fa fa-sign-out' > SignOut</Link>
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