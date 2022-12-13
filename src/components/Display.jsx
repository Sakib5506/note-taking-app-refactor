import React from 'react'
import {useContext} from 'react'
import {NoteContext} from '../contexts/Note'

function Display() {
    const {noteStates, dispatch} = useContext(NoteContext)

  return (
    <ul className='list-area' style={{textAlign: 'center', paddingRight: '350px', paddingLeft:'350px'}}>
        {noteStates.notes.map((note) =>( 
          <div id='div-toggler' onClick={() => dispatch({type: 'TOGGLE_COLOR' ,payload: note.id})} style={{border: '1px solid black', height: '50px', margin: '10px', backgroundColor: note.isComplete? 'red' : 'blue',color: 'whitesmoke'}}>   
          <li>
            <span>{note.titleName}</span><br />

            <button onClick = {(e) => {
              e.stopPropagation();
              dispatch({type: 'EDIT_NOTE', payload: note.id})}}>Edit
              </button>
              
            <button onClick={(e) => {
              e.stopPropagation();
              dispatch({type: 'DELETE_STUDENT', payload: note.id})}}>Delete</button>
          </li>   
          </div>       
        ))}
      </ul>
  )
}

export default Display