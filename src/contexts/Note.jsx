import { createContext, useReducer } from "react";
import { noteReducer } from "../reducers/noteReducer";

export const NoteContext = createContext();

const initState = {
    title: '',
    notes: [],
    editMode: false,
    editable: null
}

function NoteProvider({children}) {
    const [noteStates, dispatch] = useReducer(noteReducer, initState);
  return (
    <NoteContext.Provider value = {{noteStates, dispatch}}>
        {children}
    </NoteContext.Provider>
  )
}

export default NoteProvider