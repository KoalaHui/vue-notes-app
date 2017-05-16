import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
  notes: [], // 所有的笔记
  activeNote: {} // 当前的笔记
};

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      title: 'My note',
      text: 'The content',
      favorite: false
    };
    state.notes.push(newNote);
    state.activeNote = newNote;
  },

  EDIT_NOTE_TITLE (state, title) {
    state.activeNote.title = title;
  },

  EDIT_NOTE_TEXT (state, text) {
    state.activeNote.text = text;
  },

  DELETE_NOTE (state) {
    state.notes.splice(state.notes.indexOf(state.activeNote), 1);
    state.activeNote = state.notes[0] || {};
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note;
  }
};

const getters = {
  notes: state => state.notes,
  activeNote: state => state.activeNote,
  activeNoteTitle: state => state.activeNote.title,
  activeNoteText: state => state.activeNote.text
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

