
import './style.css'
import { FaPlus } from "react-icons/fa"
const Header = () =>{
    return <div className="header">
        <h3>TO DO LIST APPLICATION</h3>
        <div className='search'>
            <input type="text" placeholder='Add new task in here'/>
            <span className='icons'><FaPlus/></span>
        </div>
    </div>
}

export default Header