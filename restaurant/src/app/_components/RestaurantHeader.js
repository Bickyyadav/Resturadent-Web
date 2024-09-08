import Link  from "next/link"

const RestaurantHeader = ()=>{
    return(
        <div className="header-wrapper">
            <div className="logo">
                <img style={{width:100}} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-logo%2Ccooking-logo%2Crestaurant-logo-design-template-8048c6b88c3702da6e0804bc38ce7f33_screen.jpg?ts=1672750337" />
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Login/signup</Link>
                </li>
                <li>
                    <Link href="/">profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default RestaurantHeader