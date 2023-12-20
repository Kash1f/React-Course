
import './..practice/Video2.css'

const Video = ({title, channel, views,time,verified}) => {
//title etc yahan receive hoga
//agar title etc naam ki cheez is object me hogi, ye object kya hai? Props. to wo apne aap title naam ki cheez me assign hojaiga

// let channelJSX;
// if(verified){
//     channelJSX = <div className='channel'> {channel} ✅</div>
// } else{
//     channelJSX = <div className='channel'>{channel}</div>
// } 


return (
    
    <>
    <div className="container">
    <div className="pic">
    <img src="https://picsum.photos/id/2/160/90" alt="Katherine Johnson"/>
        </div>
    <div className='title'> {title}</div> {/* title etc rcv hone k baad yahan use hoga */}

     <div className='channel'> {channel} {verified ? '✅' : null }</div> 

    <div className='views'> {views} views <span>.</span> {time}
    </div> 
        
    </div>
        </>
    )
}

export default Video