import addLetter from '../actions'

const letter = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LETTER':
      return [
        ...state,
        {
          text: action.text,
        }
      ]

      default:
        return state
    }
  }

  export default letter
