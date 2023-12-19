
import './Video.css'

const Video = () => {

    let topic = "React JS"
    let bg = 'dark'
    return (
        <>
            <img
                src="https://placekitten.com/160/90"
                alt="Katherine Johnson"/>
                <div className={bg}> {topic} Tutorial</div>
                </>
    )
}

export default Video