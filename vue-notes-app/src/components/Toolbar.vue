<template>
  <div id="toolbar">
    <i class="logo"><img src="../assets/logo.png" width="30" height="30"></i>
    <i @click="newNote">+</i>
    <i @click="toggleFavorite">#</i>
    <i @click="deleteNote">-</i>
  </div>
</template>

<script>
  import {newNote, deleteNote, toggleFavorite} from '../vuex/actions';
  import {activeNote} from '../vuex/getters';

  export default {
    vuex: {
      getters: {
        activeNote
      },
      actions: {
        newNote,
        deleteNote,
        toggleFavorite
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #toolbar
    float: left
    width: 80px
    height: 100%
    background-color: #30414D
    color: #767676
    padding: 35px 25px 25px 25px
    i
      display: block
      text-align center
      width: 30px
      height: 30px
      font-size: 30px
      cursor: pointer
      opacity: 0.8
      transition: opacity 0.5s ease
      margin-bottom: 10px
      &:first-child
        margin-bottom: 30px
      &:hover
        opacity: 1
      &.starred
        color: #F7AE4F
</style>
