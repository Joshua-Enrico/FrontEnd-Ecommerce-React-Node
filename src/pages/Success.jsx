import { useLocation } from "react-router"

const Success = () => {
    const location = useLocation()
    const data = location.state.stripeData
    const cart = location.state.products
    console.log(location)
    return (
        <div>
            Success
        </div>
    )
}

export default Success
