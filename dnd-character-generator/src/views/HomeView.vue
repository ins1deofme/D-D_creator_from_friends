<template>
  <div class="container">
    <div class="left-container">
      <CharacterList :characters="characters" />
    </div>
    
    <div class="main-content">
      <RegistrationForm @register-user="registerUser" />
      <CharacterEditor @create-character="addCharacter" />
    </div>

    <div class="rules-container">
      <RulesView />
    </div>
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList.vue';
import CharacterEditor from '@/components/CharacterEditor.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
import RulesView from '@/components/RulesView.vue';

export default {
  components: { CharacterList, CharacterEditor, RegistrationForm, RulesView },
  data() {
    return {
      characters: [
        { id: 1, name: "Элронд", class: "Маг" },
        { id: 2, name: "Боромир", class: "Воин" },
        { id: 3, name: "Леголас", class: "Лучник" }
      ]
    };
  },
  methods: {
    addCharacter(newCharacter) {
      newCharacter.id = this.characters.length + 1;
      this.characters.push(newCharacter);
    },
    registerUser(userData) {
      alert(`Пользователь ${userData.username} зарегистрирован!`);
    }
  }
};
</script>

<style scoped>
.container {
  top: 100px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}



.main-content {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}


</style>
