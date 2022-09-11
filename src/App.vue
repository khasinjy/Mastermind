<template>
  <v-container class="gameContainer bg-blue-grey-lighten-5">
    <h1 class="mb-6">Mastermind</h1>
    <v-row>
      <v-col cols="7">
        <GameRules/>
      </v-col>
      <v-col cols="5">
        <BoardGame/>
      </v-col>
    </v-row>
  </v-container>
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

body {
  background: url("./assets/DiamondShapePattern.png") repeat;
}

.gameContainer {
  max-width: 50%;
}
</style>
