import './title.css'

export default function Title( { children, className="center" } ){
    return (
        <section className={`flex flex-row title ${className}`}>
            {children}
        </section>
    )
}