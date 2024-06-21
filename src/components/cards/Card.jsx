import './card.css'

const Card = ({ children, cardColor, colorLine }) => {
    return (
        <article className={`card card-color ${cardColor}`}
        >
            {children}
        </article>
    )
}

const CardHeader = ({children}) => {
    return (
        <header className="p-card b-bottom">
          <div className="flex flex-row">
            <div className="flex-col">
              {children}
            </div>
          </div>
        </header>
    )
}

const CardBody = ({children}) => {
    return (
        <main className="p-card">
          {children}
        </main>
    )
}

const CardFooter = ({children}) => {
    return (
    <footer className="p-card b-top">
        {children}
    </footer>
    )
} 

const UnderLine = ({colorLine}) => {
    return <hr className={colorLine}/>
}

const Image = (props) => {
    return (
        <img 
            className='image-card'
            src={props.src} 
            alt={props.alt} 
            width={props.width}
            height={props.height}
        />
    )
}


export { Card, CardHeader, CardBody, CardFooter, UnderLine, Image}