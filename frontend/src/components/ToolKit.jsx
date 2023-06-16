import AddLogForm from './AddLogForm'
import LogTab from './LogTab'
import {useState} from 'react'

function ToolKit() {
    const [addSelect, setAddSelect] = useState(false)

    const renderAddButton = () => {
        return <button onClick={() => setAddSelect(true)}>Add</button>
    }

    const renderAddForm = () => {
        return <AddLogForm toggleAddSelect={setAddSelect} />
    }

    return (
        <div className="tool-kit-container">

            <div className="log-list-container">

                <div className="add-Log-Container">
                    {(addSelect) ? renderAddForm() : renderAddButton()}
                </div>

            </div>

        </div>
    )
}

export default ToolKit