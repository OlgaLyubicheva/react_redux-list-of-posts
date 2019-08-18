import { createStore } from 'redux';

// action types
const LOADING = 'loading';
const SET_SEARCH_TEXT = 'set_search_text';
const SET_SEARCH_PROPS = 'set_search_props';

// action creators
export const loading = value => ({ type: LOADING, value });
export const setSearchText = value => ({ type: SET_SEARCH_TEXT, value });
export const setSearchProps = value => ({ type: SET_SEARCH_PROPS, value });

// selectors

export const getPosps = state => state.posts;
export const getSearchText = state => state.searchForm.searchText;
export const getSearchProps = state => state.searchForm.searchProps;

// reducer

const posts = (state = [], action) => {
  switch (action.type) {
    case LOADING:
      return action.value;
    default:
      return state;
  }
};

const searchForm = (state = {
  searchText: '',
  searchProps: 'title',
}, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.value,
      };
    case SET_SEARCH_PROPS:
      return {
        ...state,
        searchProps: action.value,
      };
    default:
      return state;
  }
};

const reducer = (state = {}, action) => ({
  posts: posts(state.posts, action),
  searchForm: searchForm(state.searchForm, action),
});

// const initialState = {
//   posts: [],
//   searchForm: {
//     searchText: '',
//     searchProps: 'title',
//   },
// };

const store = createStore(reducer);

export default store;
