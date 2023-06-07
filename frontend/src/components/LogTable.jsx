import LogRow from './LogRow'

function LogTable( {logArr, getSnippet} ) {

 
    return(
        // <table>
        //     {/* <thead>
                
        //     </thead> */}
        //     <tbody>
        //         <LogRow logArr={logArr} getSnippet={getSnippet}/>
        //     </tbody>
        // </table>
        <div>
            <LogRow logArr={logArr} getSnippet={getSnippet}/>
        </div>
    )
}


export default LogTable