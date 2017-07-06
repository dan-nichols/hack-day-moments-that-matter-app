import {EDIT_NAME} from './actions';

const CarDetailsReducer = (state, action) => {
	switch (action.type) {
		case "EDIT_NAME":
			console.log('EDIT_NAME');
			let dataCopy = state.DATA.map( (item, index) => {
				if (item.id !== action.payload.id) {
					return item;
				}
				
				return {
					...item,
						nickname: action.payload.name
				};
			});

			console.log(dataCopy);
			return {
				...state,
					DATA: dataCopy
			};

		default:
			console.log('DEFAULT');
			console.log(action);
			return state;
	}
}

export default CarDetailsReducer;