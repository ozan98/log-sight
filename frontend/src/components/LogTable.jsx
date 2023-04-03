import LogRow from './LogRow'

function LogTable( {logArr} ) {
    
    return(
        <table>
            <thead>
                
            </thead>
            <tbody>
                <LogRow logArr={logArr} />
            </tbody>
        </table>
    )
}


export default LogTable