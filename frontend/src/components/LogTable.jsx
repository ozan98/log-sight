import LogRow from './LogRow'

function LogTable( {logArr, getSnippet} ) {
    
    return(
        <table>
            <thead>
                
            </thead>
            <tbody>
                <LogRow logArr={logArr} getSnippet={getSnippet}/>
            </tbody>
        </table>
    )
}


export default LogTable