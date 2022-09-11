<template>
  <div class="">
    Soluce
    <v-icon
      v-for="(n, index) in numberOfSoluce" :key="index" 
      large
      :color="getSoluceColor(index)"
    >
       mdi-diamond
    </v-icon>
  </div>
</template>

<style>
</style>

<script>
import myGame from '../mixins/myGame';

export default {
  props:["endGame"],
  computed: {
    soluce(){
        const soluce = [];
        for(let i=0; i<this.numberOfSoluce; i++){
            soluce.push(this.getRandomItem(this.colors));
        }
        return soluce
    },
    
  },
  methods:{
    getRandomItem(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    },
    getSoluceColor(index){
      return Object.keys(this.endGame).length != 0 ? this.soluce[index] : "grey";
    }
  },
   mixins: [myGame],
  mounted(){
    this.$emit("soluce", this.soluce);
  }
}
</script>
