import React,{Component} from 'react'
import { Redirect } from 'react-router-dom'
import TestImg from '../resources/test.png'
import CategoryImg from '../resources/category.jpg'

/*
 * formated input representing a category
 */
var category_json = 
{
    "Cooking":{
        "Label": "Cooking", 
        "Image":CategoryImg 
    },
    "Camping":{
        "Label": "Camping", 
        "Image":TestImg 
    }
}

class Categories extends Component {

    render()
    {
        /*
         * creates a list of categories to be used
         */
        var category_array = [];
        Object.keys(category_json).forEach(function(key)
            {
                category_array.push(category_json[key]);
            });

        return(
            <div className = "CategoriesPage">
                <div class="container">
                    <div class ="categories">
                        /*
                         * for each item in the list of categories, use the key to look up a label and image. 
                         * then create an element of type category with relevant params
                         */
                        {category_array.map(item => <Category name = {item.Label} image = {item.Image}/>)}
                    </div>
                </div>
            </div>
        )

    }
}

class Category extends Component {
    render()
    {
        return (
            <div class = "category_container" >
                <h class = "category_name">{this.props.name}</h>
                <img class = "category_img" src = {this.props.image}/>
            </div>
        )
    }
}
export default Categories;
