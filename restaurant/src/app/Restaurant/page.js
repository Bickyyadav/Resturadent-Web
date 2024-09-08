"use client"
import { useState } from "react"
import RestaurantLogin from "../_components/restaurantLogin"
import RestaurantSignin from "../_components/restaurantSignup"
import RestaurantHeader from "../_components/RestaurantHeader"
import  "./style.css"
import RestaurantFooter from "../_components/RestaurantFooter"

const Restaurant=()=>{
    const [login, setlogin] = useState(true);   
    return (
        <>
        <RestaurantHeader/>
        <div className="container">


        <h1>This is Restaurant Page </h1>
        {
             login? <RestaurantLogin /> : <RestaurantSignin/> 
        }
        <div>
        <button className="button-link  " onClick = {()=>setlogin(!login)}>
            {login ? "Do not have account? Signup" : "Already have an account"}
            Already have  account? Signin
            </button> 
            </div>
            </div>
            <RestaurantFooter/>
        </>
    )
}


export default Restaurant