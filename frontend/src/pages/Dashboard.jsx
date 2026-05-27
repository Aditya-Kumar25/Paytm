import { Balance } from "../components/Balance"
import { Navbar } from "../components/Navbar"
import { Users } from "../components/Users"

export const Dashboard=()=>{
    return(
        <div>
            <Navbar username={"user"}/>
            <Balance value={"100000000000"}/>
            <Users/>
            
        </div>
    )
}