export const EDIT_NAME = "EDIT_NAME";

export const EditNameAction = (inputValues) => {
	console.log('ACTIONS!!!!');
	console.log(inputValues);

	return {
		type: EDIT_NAME,
		payload: inputValues
	}
};
