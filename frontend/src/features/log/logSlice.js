import {createSlice} from '@reduxjs/toolkit'

// Initialize the state
// const initialState = {
//     logName: '',
//     logType: '',
//     logStr: '',
//     logEntries: [],
//     filteredLog: [],
// }

const initialState = {
    logList:  [],
    viewLogList: [],
}

export const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        reset: (state) => initialState,
        // addLog: (state, action) => {
        //     state.logName = action.payload.logName
        //     state.logType = action.payload.logType
        //     state.logStr = action.payload.logStr
        //     state.logEntries = action.payload.logEntries
        //     state.filteredLog = action.payload.filteredLog
        // }
        addLog: (state, action) => {
            state.logList.push(action.payload)
        },
        removeLog: (state, action) => {
            state.logList = state.logList.filter((log) => {
                return log.logName !== action.payload.logName
            })
        },
        addLogToView: (state, action) => {
            state.viewLogList.push(action.payload)
        },
        removeLogFromView: (state, action) => {
            state.viewLogList = state.viewLogList.filter((log) => {
                return log.logName !== action.payload.logName
            })
        },
    
    }
})

export const { reset, addLog, removeLog, addLogToView, removeLogFromView } = logSlice.actions
export default logSlice.reducer