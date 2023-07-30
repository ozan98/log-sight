import AddLogForm from './AddLogForm'
import LogPanel from './LogPanel'

import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { addLogToView, removeLogFromView, removeLog } from '../features/log/logSlice'

import { Dropdown } from 'antd'
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'

import { FaCirclePlus, FaCircle } from 'react-icons/fa6'
import { toast } from 'react-toastify'

function ToolKit() {
    const [addSelect, setAddSelect] = useState(false)
    const {logList, viewLogList} = useSelector((state) => state.log)
    const dispatch = useDispatch()

    const renderAddButton = () => {
        return(
            <>
            <FaCirclePlus id="plus-icon" />
            <button onClick={() => setAddSelect(true)}> New Log</button>
            </>
        )
    }

    const renderAddForm = () => {
        return <AddLogForm toggleAddSelect={setAddSelect} />
    }

    const handleExistingLogs = (log) => {
        let exists = false
            for(let logInList of viewLogList) {
                if(logInList.logName === log.logName)
                    exists = true
            }

            return exists
    }

    const handleMenu = (key, log) => {
        switch(key) {
            case 'addToView':

                if(handleExistingLogs(log) === false) {
                    dispatch(addLogToView(log))
                } else {
                    toast.error('Log is already added to view', {
                        position: 'top-right',
                        theme: 'light'
                    })
                }
            break;
            case 'removeFromView':
                dispatch(removeLogFromView(log))
            break;
            case 'deleteLog':
                dispatch(removeLog(log))
            break;
        }

        }

    

    const items = [
        {
            label: (<p>Add To View</p>),
            key: 'addToView',
            icon: <PlusOutlined />,
        },
        {
            label: (<p>Remove From View</p>),
            key: 'removeFromView',
            icon: <MinusOutlined />,
        },
        {
            label: (<p>Remove Log</p>),
            key: 'deleteLog',
            icon: <DeleteOutlined />,
            danger: true,
        },
    ]

    const renderLogList = (logs) => {
        return logs.map((log) => {
            return (
                <Dropdown menu={
                    {
                        items, 
                        onClick: ({key}) => {
                            return handleMenu(key, log)
                        }
                    }
                    } 
                    trigger={['contextMenu']} 
                    key={log.logName}>
                <div className="log-list-tab">
                    <p>{log.logType}</p>
                    <p>{log.logName}</p>
                    {handleExistingLogs(log) ? <FaCircle className="in-view" /> :<FaCircle className="not-in-view" />}
                </div>
                </Dropdown>
            )
        })
    }

    return (
        <div className="tool-kit-container">
            <div className="side-bar">
                <div className="log-list-container">
                    <div id="log-list-label">
                            <p>Logs</p>
                    </div>
                    <div className="log-list">
                        {renderLogList(logList)}
                    </div>
                </div>
                <div className="add-log-container">
                    {(addSelect) ? renderAddForm() : renderAddButton()}
                </div>     
            </div>

            <div className="panel-container">
                <LogPanel />
            </div>

            

        </div>
    )
}

export default ToolKit