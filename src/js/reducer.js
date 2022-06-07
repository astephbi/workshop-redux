const initState = {person:[{
    name: '', 
    email: '',
    id: ''
}]};

export const reducer = (state=initState, actions) => {
    switch (actions.type){
        case 'create':
            return {person:[...state.person, actions.data]};
        case 'delete':
            return { person: state.person.filter(person=>
                person.id !== actions.data.id)}
        default:
            return state
    }
};