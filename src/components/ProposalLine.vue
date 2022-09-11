<template>
 <span class="d-inline-flex my-3">
    <p class="font-weight-medium"> {{ index + 1 }} </p>
    <v-divider vertical class="mx-2"></v-divider>
    <div v-for="(color, indexDiamond) in proposal" :key="indexDiamond"  :class="`diamond${indexDiamond}`">
              <v-icon
                large
                :color="color"
              >
                mdi-diamond
              </v-icon>
    </div>
    <v-divider vertical class="mx-2"></v-divider>
    <div :class="`validation${index + 1}`">
      <v-btn
        v-if="index == currentProposalIndex" 
        :name="`validateProposal${index + 1}`" 
        :disabled="disabledValidation"
        color="primary" 
        size="small" 
        @click="check()"
      >
        OK
      </v-btn>
      <correction-proposal
        v-else 
        :soluce="soluce"
        :proposal="proposal" 
        :indexProposal="index"
      >
      </correction-proposal>
    </div>
  </span>
</template>

<style>
</style>

<script>
import CorrectionProposal from './CorrectionProposal.vue';
import myGame from '../mixins/myGame';

export default {
  components: { CorrectionProposal },
  props:["soluce", "index", "proposal", "currentProposalIndex"],
  computed:{
    disabledValidation(){
      return this.proposal.includes("grey");
    }
  },
  methods:{
    check(){
      //TODO ecran fin de jeu
      if(JSON.stringify(this.proposal) == JSON.stringify(this.soluce)) {
        this.$emit("endGame", "win");
        alert("gagne");

      }
      else if((this.currentProposalIndex+1) == this.maxTries){
        this.$emit("endGame", "lose");
        alert("perdu");
      }
      else {
        this.$emit("newProposal");
      }
      
    }
  },
  mixins: [myGame],
}
</script>
