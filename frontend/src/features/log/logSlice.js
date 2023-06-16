import {createSlice} from '@reduxjs/toolkit'

// Initialize the state
const initialState = {
    logName: '',
    logType: '',
    logStr: '',
    logEntries: [],
    filteredLog: [],
}

export const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        reset: (state) => initialState,
        addLog: (state, action) => {
            state.logName = action.payload.logName
            state.logType = action.payload.logType
            state.logStr = action.payload.logStr
            state.logEntries = action.payload.logEntries
            state.filteredLog = action.payload.filteredLog
        }
    }
})

export const { reset, addLog } = logSlice.actions
export default logSlice.reducer