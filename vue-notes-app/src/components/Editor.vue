<template>
  <div id="note-editor">
    <input class="form-control" :placeholder="activeNoteTitle" :valua="activeNoteTitle" @input="editNoteTitle">
    <textarea class="form-control" :value="activeNoteText" @input="editNoteText">
    </textarea>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    computed: mapGetters(['activeNoteText', 'activeNoteTitle']),
    methods: mapActions(['editNoteText', 'editNoteTitle'])
  };

</script>

