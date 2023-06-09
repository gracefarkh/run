import {useSelector} from "react-redux";

const Main =()=>{
    const {probka} = useSelector(state=>state.probkaReducer)
    console.log(probka)
    return (
        <div>
        </div>
    )
}
export default Main