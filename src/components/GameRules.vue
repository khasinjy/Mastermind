<template>
  <div class="rules">
    <h3>{{ title }}</h3>
    <p class="text-justify">{{ msg }}</p>
  </div>
</template>

<style>
</style>

<script>
import myGame from '../mixins/myGame';

export default {
  data(){
    return {
      title: "Règles du jeu",
      msg: "Trouve la bonne combinaison de 4 diamants ! Tu as le choix parmi les 6 couleurs proposées en bas, et tu dois trouver le bon ordre...L'ordinateur t'indiquera dans la colonne de droite si tu as trouvé quelque chose :L'un des diamants est bien placé.L'un des diamants existe, mais est mal placé.Aucun des diamants n'est dans la solution"
    }
  },
  computed:{
    nbForCombi(){
      return this.colors.length;
    }
  },
  mixins: [myGame]
  
}
</script>
