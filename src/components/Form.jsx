import React from 'react'
import {useContext} from 'react'
import {NoteContext} from '../contexts/Note'

function Form() {
    const {noteStates, dispatch} = useContext(NoteContext)

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            noteStates.editMode ? dispatch({type: 'UPDATE_STUDENT' , payload: noteStates.title}): dispatch({type: 'CREATE_NOTE', payload: noteStates.title})
        }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input onChange={(event) => dispatch({type: 'CHANGE_TITLE', payload: event.target.value})} type="text" value={noteStates.title} name="" id="" placeholder='Enter your note' />
            <button type="submit">{noteStates.editMode ? 'Update Note' : 'Add Note'}</button>
        </form>
    )
}

export default Form