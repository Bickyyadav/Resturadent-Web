
const RestaurantLogin = ()=>{
    return (
        <>
        <h1>This is from the Restaurant login page</h1>
        <div>
            <div className="input-wrapper"> 
            <input type="text" className="input-field" placeholder="Enter Email Id"/>
            </div>
            <div className="input-wrapper">
            <input type="password"  className="input-field" placeholder="Enter  Password"/>
            </div>
            <div className="input-wrapper" >
                <button className="button">Login Here</button>
            </div>
        </div>
        </>
    )
}

export default RestaurantLogin