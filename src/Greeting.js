export const Greeting = ({name,onClick}) => {
    return (
        <div>
            <h2>Welcome {name}</h2>
            <button onClick={onClick}>Click</button>
        </div>
    )
}