import { useLocation } from "react-router"
import { userRequest } from "../requestMethods"
import { useState } from "react"

const Success = () => {
    const location = useLocation()
    const data = location.state.stripeData
    const cart = location.state.products
    const [orderId, setOrderId] = useState(null)
    console.log(location)

    // const createOrder = async () => {
    //         try {
    //             const res = await userRequest.post("/orders", {
    //                 userId: 
    //             })
    //         } catch (error) {
    //             console.log(error)
    //         }
    // }
    return (
        <div>
            Success
        </div>
    )
}

export default Success
