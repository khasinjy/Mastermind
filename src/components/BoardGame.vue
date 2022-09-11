<template>
  <v-card>
    <v-card-title>
      <GameSoluce @soluce="soluce = $event" :endGame="this.endGame"/>
    </v-card-title>
    <v-card-text>
      <div class="proposals">
        <v-container v-for="(proposal, index) in proposals" :key="index" :class="`proposal${index + 1} py-1`">
          <proposal-line 
            :index="index"
            :proposal="proposal"
            :soluce="soluce"
            :currentProposalIndex="currentProposalIndex"
            @newProposal="newProposal()"
            @endGame="this.endGame = $event"
          >
          </proposal-line>
        </v-container>
      </div>
    </v-card-text>
    <v-card-actions class="choices">
       <v-btn
        v-for="(color, indexDiamond) in colors" :key="indexDiamond"
        variant="text"
        icon="mdi-diamond"
        :color="color"
        @click="changeDiamondColor(color)"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>
</style>

<script>
import GameSoluce from './GameSoluce.vue';
import ProposalLine from './ProposalLine.vue';
import myGame from '../mixins/myGame';

export default {
  data(){
    return {
      currentProposalIndex: 0,
      proposals: [],
      soluce: undefined,
      endGame : {}
    }
  },
  methods:{
    changeDiamondColor(color){
      const index = this.proposals[this.currentProposalIndex].findIndex(proposal => ! this.colors.includes(proposal));
      this.proposals[this.currentProposalIndex][index] = color;
      //TODO si deja une proposition de 4 a ete faite
    },
    newProposal(){
        this.currentProposalIndex += 1;
        this.addProposal();
    },
    addProposal(){
      let proposal = [];
      for(let j=0; j<this.numberOfSoluce; j++){
          proposal.push("grey");
      }
      this.proposals.push(proposal);
    }
  },
  mounted(){
    this.addProposal();
  },
  mixins: [myGame],
  components:{
    GameSoluce,
    ProposalLine
  }
  
}
</script>
