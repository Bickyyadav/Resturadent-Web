
const RestaurantSignin = ()=>{
    return (
        <>
        <h1> Signup Page</h1>
        <div>
            <div className="input-wrapper"> 
            <input type="text" className="input-field" placeholder="Enter Email Id"/>
            </div>
            <div className="input-wrapper">
            <input type="password"  className="input-field" placeholder="Enter  Password"/>
            </div>
            <div className="input-wrapper">
            <input type="password"  className="input-field" placeholder="Confirm Password"/>
            </div>
            <div className="input-wrapper">
            <input type="password"  className="input-field" placeholder="Enter restarurant Name"/>
            </div>
            <div className="input-wrapper">
            <input type="password"  className="input-field" placeholder="Enter City"/>
            </div>
            <div className="input-wrapper">
            <input type="password"  className="input-field" placeholder="Enter full Address"/>
            </div>
            <div className="input-wrapper">
            <input type="password"  className="input-field" placeholder="Enter your Contact NO  "/>
            </div>
        
            <div className="input-wrapper" >
                <button className="button">Signup</button>
            </div>
        </div>
        </>
    )
}

export default RestaurantSignin