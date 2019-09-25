import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';


class RecipeDetail extends Component { 
       state={
            recipe:{},
            loading:true
            
        }
    
    
   async componentDidMount(){
       const url=`https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.props.match.params.id}`;
       try{
           const response=await fetch(url);
        const responseData=await response.json();
        this.setState({
            recipe:responseData.recipe,
            loading:false
        })
       }
       catch(error){
           console.log(error)
       }
   }

    render() {
        const {image_url,publisher,publisher_url,source_url,title,ingredients}=this.state.recipe;
        if(this.state.loading){
            console.log("loading...")
            return(<div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h2 className="text-uppercase text-orange text-center">
                            Loading...
                        <ReactLoading type='Bars'  height={667} width={375} />
                        </h2>
                    </div>
                </div>
            </div>)
        }

        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                    <Link to="/recipes" className="btn btn-warning mb-5 text-capitalize">Back to recipe list</Link>
                    <img src={image_url} className="d-block w-100" style={{maxHeight:"30rem"}} alt="recipe"/>
                    </div>
                    {/* info section */}
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h6 className="text-uppercase">{title}</h6>
                        <h6 className="text-orange text-capitalize text-slanted">provided by {publisher}</h6>
                        <a href={publisher_url} target="blank" className="btn bg-orange text-white mt-2 text-capitalize">publisher webpage</a>
                        <a href={source_url} target="blank" className="btn btn-success mt-2 mx-2 text-capitalize">recipe url</a>
                        <ul className="list-group mt-4">
                        <h2 className="mt-3 mb-4">Ingredients</h2>
                        {ingredients.map((item,index)=>{
                            return(<li key={index} className="list-group-item text-slanted">{item}</li>)
                        })}
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeDetail;