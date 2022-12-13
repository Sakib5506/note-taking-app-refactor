export const noteReducer = (state, action) => {
    switch (action.type){
        case 'CHANGE_TITLE': {
            return{
                ...state,
                title: action.payload,
            }
        }

        case 'CREATE_NOTE': {
            const newNote = {
                id: Date.now(),
                titleName: action.payload,
                isComplete: false
            }
            return{
                ...state,
                notes: [newNote, ...state.notes],
                title: ''
            }
        }

        case 'EDIT_NOTE': {
            const toBeEdited = state.notes.find((item) => item.id === action.payload)
            return{
                ...state,
                editMode: true,
                editable: toBeEdited,
                title: toBeEdited.titleName
            }
        }

        case 'UPDATE_STUDENT': {
            return{
                ...state,
                notes: state.notes.map((item) =>{
                    if(item.id === state.editable.id){
                        item.titleName = action.payload
                    }
                    return item
                }),
                editMode: false,
                editable: null,
                title: ''
            }
        }

        case 'DELETE_STUDENT': {
            return{
                ...state,
                notes: state.notes.filter((item) => item.id !== action.payload)
            }
        }

        case 'TOGGLE_COLOR': {
            return{
                ...state,
                notes: state.notes.map((item) => {
                    if(item.id === action.payload){
                        item.isComplete = !item.isComplete;
                    }
                    return item;
                })
            }
        }

        default: {
            return state;
        }
    }
};