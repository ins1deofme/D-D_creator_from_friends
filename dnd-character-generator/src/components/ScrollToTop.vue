<template>
    <button v-show="isVisible" @click="scrollToTop" class="scroll-to-top">
      Наверх
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() { // Заменили beforeDestroy на beforeUnmount
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        // Показываем кнопку, когда пользователь прокручивает страницу вниз
        this.isVisible = window.scrollY > 300;
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .scroll-to-top {
    
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #77581fd5;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    opacity: 0.8;
    transition: opacity 0.3s;
  }
  
  .scroll-to-top:hover {
    opacity: 1;
  }
  
  .scroll-to-top:focus {
    outline: none;
  }
   </style>
  