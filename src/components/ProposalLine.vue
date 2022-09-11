<template>
 <v-row >
    <v-col cols="1">
      <p class="font-weight-medium"> {{ index + 1 }} </p>
    </v-col>
    <v-col cols="5">
      <span v-for="(color, indexDiamond) in proposalValue" :key="indexDiamond"  :class="`diamond${indexDiamond}`">
        <v-icon large :color="color" @click="erase(indexDiamond)">
          mdi-diamond
        </v-icon>
      </span>
    </v-col>
    <v-col cols="4">
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
    </v-col>
  </v-row>
</template>

<style>
</style>

<script>
import CorrectionProposal from './CorrectionProposal.vue';
import myGame from '../mixins/myGame';

export default {
  components: { CorrectionProposal },
  props:["soluce", "index", "proposal", "currentProposalIndex"],
  data(){
    return {
      proposalValue: this.proposal
    }
  },
  computed:{
    disabledValidation(){
      return this.proposalValue.includes("grey");
    }
  },
  methods:{  
    erase(index){
      this.proposalValue[index] = "grey";
    },
    check(){
      //TODO ecran fin de jeu: dialog component vuetify
      if(JSON.stringify(this.proposalValue) == JSON.stringify(this.soluce)) {
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
