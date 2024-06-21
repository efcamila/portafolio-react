import './avatar.css'

export default function Avatar( props ){

    return (
        <span> 
            <img 
                src={props.src} 
                alt={props.alt} 
                className={`avatar-${props.type} avatar-${props.size}`}/>
        </span>
    )
 }