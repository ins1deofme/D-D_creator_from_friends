<template>
  <div id="characters" class="section">
    <h2>Готовые персонажи</h2>
    <ul>
      <li v-for="character in characters" :key="character.name">
        <span 
        class="section-link"
          :to="{ name: 'character-details', params: { name: character.name } }"
         v-text="character.name"
         @click="to(character.name)"
          />
           - {{ character.class }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  methods: {
    to(name) {
      this.$router.push(`/character/${name}`);
    }
  }
};
</script>

<style scoped>
.section {
  background-color: #77581f77;
  color: #ffffff;
  padding: 20px;
  margin: 20px 0;
}
.section-link {
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
</style>
