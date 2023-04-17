

function LogTab( {name, type, setCurrent} ) {

    return (
        <div className="tab-container" onClick={() => setCurrent(name)}>
            <div className="tab">
                <p>{name}</p>
                <p><span>{type}</span></p>
            </div>
        </div>
    )
}

export default LogTab