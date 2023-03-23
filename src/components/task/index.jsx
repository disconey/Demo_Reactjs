import "./style.css"
import { FaTimes } from "react-icons/fa"



const Task = ({ content, content2, children}) => {
    return <div className="task">
        {content}
        <div className="colorgreen">
        {content2}

        </div>
        <div className="task2">
            {children}
            <div className="icon">
          <span className="iconBlack"><FaTimes /></span>
          <span></span>
        </div>
        </div>
    </div>
}


export default Task