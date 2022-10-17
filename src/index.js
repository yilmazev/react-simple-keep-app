import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NoteLayer } from './hooks/NoteContext';
import reducer, { initialState } from './hooks/reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NoteLayer initialState={initialState} reducer={reducer}><App /></NoteLayer>)