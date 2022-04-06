import { FETCH_DATA, DELETE_USER, UPDATE_USER, CREATE_USER } from 'actions/types';
import ShortUniqueId from 'short-unique-id';

const uid = new ShortUniqueId({
    length: 7,
    dictionary: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
});

const initialState = {
    dataRepos: []
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, dataRepos: action.payload };
        case DELETE_USER:
            const newData = state.dataRepos.filter((user) => user.id !== action.payload.id);
            return { ...state, dataRepos: newData };
        case UPDATE_USER:
            const updateUser = action.payload.user;
            const newDataRepos = state.dataRepos.map((user) => user.id === action.payload.user.id ? {
                ...user,
                name: updateUser.name,
                description: updateUser.description,
                watchers: updateUser.watchers,
                language: updateUser.language,
                open_issues: updateUser.open_issues,
                private: updateUser.private,
            } : user);
            return { ...state, dataRepos: newDataRepos };
        case CREATE_USER:
            const user = action.payload.user;
            const id = uid();
            return { ...state, dataRepos: [{ ...user, id }, ...state.dataRepos] };
        default:
            return state;
    }
}

export default dataReducer;