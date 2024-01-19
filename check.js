



//action Types
const add = 'ADD'
const deleted = 'DELETE'
const toggle = 'Toggle'
const completeAll = 'CompleteAll'
const clearComplete = 'ClearComplete'
// const add = 'ADD'
// const add = 'ADD'


//actions
const adding = (text) => {
    return {
        type: add,
        payload: text
    }
}

const deleting = (id) => {
    return {
        type: deleted,
        payload: id
    }
}
const togole = (id) => {
    return {
        type: toggle,
        payload: id
    }
}
const colorChange = (id, color) => {
    return {
        type: toggle,
        payload: {
            id, color
        }
    }
}

const completingAll = () => {
    return {
        type: completeAll
    }
}
const clearCompleting = () => {
    return {
        type: clearComplete
    }
}









const initialTodos = [
    {
        id: 1,
        color: 'red',
        text: 'learn redux',
        checked: true
    },
    {
        id: 1,
        color: 'red',
        text: 'learn justand',
        checked: false
    }
]
const reducerForTodos = (state = initialTodos, action) => {
    switch (action.type) {
        case add:
            return [
                ...state,
                {
                    // id: state.length + 1,
                    id: state.reduce((maxID, element) => Math.max(maxID, element.id), -1) + 1,
                    text: action.payload,
                    checked: false
                }
            ]
        case deleted:
            return state.filter(item => item.id !== action.payload)

        case toggle:

            state.map(item => {

                if (item.id === action.payload) {
                    return {
                        ...item,
                        checked: !item.checked
                    }
                }
            })

        case colorChange:
            const { id, color } = action.payload
            return state.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        color: color
                    }
                }
            })

        case completingAll:
            return state.map(item => {
                return {
                    ...item,
                    checked: true

                }
            })

        case clearComplete:

            return state.filter(item => item.checked === true)

        default:
            return state;
    }
}






















//filters rexux setup

//action Types
const setTagValue = 'setTag'
const setColorAndToggle = 'colorAndToggle'

//filters actions

const setTag = (tag) => {
    return {
        type: setTagValue,
        payload: tag
    }
}
const setColorToggle = (color, changType) => {
    return {
        type: setColorAndToggle,
        payload: {
            color,
            changType
        }
    }
}




const filterInitialState = {
    tag: 'All',
    colors: [],

}


const filterReducer = (state = filterInitialState, action) => {
    switch (action.type) {
        case setTagValue:
            return {
                ...state,
                tag: action.payload
            }
        case setColorAndToggle:
            const { color, changType } = action.payload

            switch (changType) {
                case 'addition':

                    return {
                        ...state,
                        colors: [
                            ...state.colors,
                            color
                        ]

                    }
                case 'removal':

                    return {
                        ...state,
                        colors: state.colors.filter(item => item.color !== color)

                    }




                default:
                    return state;
            }

        default:
            return state;
    }
}









const handle = (color) => {

    if (filterInitialState.colors.includes(color)) {
        //dispatch(setColorToggle(color,'removal'))
    } else {
        //dispatch(setColorToggle(color,'addition'))
    }

}


// 
// 
// .filter(item=>{
   // const {tag,colors}=filterInitialState
//if (colors.length>0){
// return colors.inclues(item?.color)
//}
//return true
//

//})
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 





// 

// .filter(item=>{
 //const {tag,colors}=filterInitialState
// switch (tag) {
//     case 'All':
        
//        return  item
// case 'Complete':
        
//       
 //return item.checked 
//}

// case 'Incomplete':
        
//        return  !item.checked

//     default:
//         return item;
// }



//})
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 












