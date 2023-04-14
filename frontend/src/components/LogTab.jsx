

function LogTab( {name, type, setCurrent} ) {

    return (
        <div onClick={() => setCurrent(name)}>
            <p>{name}</p>
            <p>{type}</p>
        </div>
    )
}

export default LogTab