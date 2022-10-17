import React, { createContext, useContext, useReducer } from 'react'

export const NoteLayerContext = createContext()

export const NoteLayer = ({ initialState, reducer, children }) => (
    <NoteLayerContext.Provider value={useReducer(reducer, initialState)}>
        { children }
    </NoteLayerContext.Provider>
)

export const useNoteLayerValue = () => useContext(NoteLayerContext)