import React from 'react'
import {connect} from 'react-redux'
import  {getCategories} from '../../actions/categoryAction'
class CategoryMenu extends React.Component {

    componentDidMount () {
        this.props.dispatch(getCategories())
    }
    
    render() {
        return(
            <div className = 'collapse navbar-collapse'>
                <ul class="navbar-nav mr-auto">                    
                        {
                            this.props.categories ?
                                this.props.categories.map((category,i) =>{
                                return (
                                    // //className="dropdown mr-2"
                                    <li class="nav-item dropdown" key ={i+1}>
                                         <a class="nav-link dropdown-toggle" href="#" 
                                            id="navbarDropdown" role="button" data-toggle="dropdown" 
                                                aria-haspopup="true" aria-expanded="false">
                                                           {category.mainType}
                                                            </a>
                                            {/* <button type="button" className="btn  dropdown-toggle" data-toggle="dropdown" 
                                                aria-haspopup="true" aria-expanded="false">
                                                
                                            </button> */}
                                            <div className="dropdown-menu">
                                                {
                                                    category.subType.map( (sub,i) =>{
                                                        return  <a className="dropdown-item" href={`/products/query/${sub._id}`} key ={i+1}> 
                                                                {sub.name} </a>
                                                    })
                                                } 
                                            </div>                      
                                    </li> )
                                })
                            : ''
                        }  
                </ul>
                
               
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        categories : state.categories
    }
}
export default connect(mapStateToProps)(CategoryMenu)