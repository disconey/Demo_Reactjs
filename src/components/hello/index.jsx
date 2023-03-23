// có 2 cách viêt 
// 1 class component đã sử dụng cách đây 2018-2019 
// viết theo dạng đối tượng hạn chế code rất nhiều , this khó quản lý giờ người tạo ra hooks
//2 function component 
import './style.css'
const Hello = ({ content , gender, children}) => {
    // destructoring
    // const {content} = props;
    // const content = props.content;
    
    return <div className='title'>
        {children}
        {content} - Giới tính: {gender}</div>
}

export default Hello