export const addNote = ({commit}) => {
  commit('ADD_NOTE');
};

export const editNoteTitle = ({commit}, e) => {
  commit('EDIT_NOTE_TITLE', e.target.value);
};

export const editNoteText = ({commit}, e) => {
  commit('EDIT_NOTE_TEXT', e.target.value);
};

export const deleteNote = ({commit}) => {
  commit('DELETE_NOTE');
};

export const updateActiveNote = ({commit}, note) => {
  commit('SET_ACTIVE_NOTE', note);
};

export const toggleFavorite = ({commit}) => {
  commit('TOGGLE_FAVORITE');
};
