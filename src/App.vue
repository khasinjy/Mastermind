<template>
<div>
  <GameRules/>
  <BoardGame/>
</div>
</template>

<script>
import GameRules from './components/GameRules.vue';
import BoardGame from './components/BoardGame.vue';

export default {
  name: 'App',
  components: {
    GameRules,
    BoardGame
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
