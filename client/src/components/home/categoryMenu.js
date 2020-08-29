import React from 'react'
import {connect} from 'react-redux'
import  {getCategories} from '../../actions/categoryAction'
class CategoryMenu extends React.Component {

    componentDidMount () {
        this.props.dispatch(getCategories())
    }
    
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light">
                <div className = 'headerconcept' style = {{width: '100%'}} >
                    <ul class="navbar-nav mr-auto">                    
                            {
                                this.props.categories ?
                                    this.props.categories.reverse().map((category,i) =>{
                                    return (
                                      
                                        <li class="nav-item dropdown" key ={i+1}>
                                            <a class="nav-link dropdown-toggle" href="#" 
                                                id="navbarDropdown" role="button" data-toggle="dropdown" 
                                                    aria-haspopup="true" aria-expanded="false" style = {{color:'black'}}>
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
            </nav>
        )
       
    }
}

const mapStateToProps = (state) =>{
    return {
        categories : state.categories
    }
}
export default connect(mapStateToProps)(CategoryMenu)