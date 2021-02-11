import { actions } from './../actions/lista';

export const initialState = {
    // autor: { name: "Flor", nickname:"Flopi"}
    lista : [
      /*  {
            id : null,
            titulo: null,
            imagen: null
        }*/
    ]
}

/*
    action : {
        payload : {
            lista : { id : "un id", titulo: "un titulo", imagen:"una imagen"}
        }
    }
*/

export default function listaReducer(state = initialState, action){
    switch (action.type) {
        case actions.ADD_LIST:
            return {
                ...state, // conservar estado anterior (en este caso solo existe "lista")
                lista: [ action.payload.lista, ...state.lista ], // Info previa de lista y agrego al principio el nuevo elemento
            };
            case actions.DELETE_LIST:
                return {
                    ...state,
                    lista: state.lista.filter((item) => item.id !== action.payload.id)
                    // Modificar lista
                    // Recorro array y filtro por el id que quiero eliminar (se guarda array filtrado en lista)
                };
        default:
            return state
    }
}