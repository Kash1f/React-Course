
import './Video.css'

const Video = ({title, bgColor}) => {
//title aur bgColor yahan receive hoga



    let topic = "React JS"
    // let bg = 'dark'
    return (
        <>


        <img src="https://placekitten.com/160/90" alt="Katherine Johnson"/>
        <div className='dark'> {title}</div> 
        {/* title aur bgColor rcv hone k baad yahan use hoga */}
        
        
        </>
    )
}

export default Video