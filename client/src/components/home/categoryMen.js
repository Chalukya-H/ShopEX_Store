import React from 'react'
import {connect} from 'react-redux'
import  {getCategories} from '../../actions/categoryAction'
class CategoryMenu extends React.Component {

    componentDidMount () {
        this.props.dispatch(getCategories())
    }
    
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">                 
                <a className="navbar-brand" href="/"> <img src = {logo} alt ='' style ={{height:'80px'}}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                     aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">                    
                    <div className="justify-content-center" style={{width: '100%'}}>
                    <form className="form-inline mr-auto" style= {{textAlign: "center",display: "inherit"}}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by product name" aria-label="Search"
                            value ={this.state.searchText}
                                onChange = {this.handleSearch}/>
                         <button className="btn btn-md btn-outline-warning my-2 my-sm-0" 
                            type="submit" onClick = {this.handleSubmitSearch} >Search</button>
                        </form>
                    </div>
{/* 
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">     
                    <div className="justify-content-center" style={{width: '100%'}}>
                            <input className="form-control mr-sm-2 " type="search" 
                                placeholder="Search by product name" aria-label="Search" value ={this.state.searchText}
                                onChange = {this.handleSearch}/>
                            <div className="input-group-append">
                                <button className="btn btn-md btn-outline-warning " onClick = {this.handleSubmitSearch} > Search </button>
                         
                            </div>
                        </div> */}

                    
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
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