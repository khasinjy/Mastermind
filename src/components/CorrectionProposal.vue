<template>
  <span>
    <span v-for="(value, index) in correction" :key="index"  :class="`correctionProposal${indexProposal} d-inline-flex`">
        <v-icon size="small" :color="getColor(value)"> mdi-checkbox-blank-circle </v-icon>
    </span>
  </span>
</template>

<script>
export default {
    props:["soluce", "proposal", "indexProposal"],
    computed:{
        correction(){
            let corrected = [...this.soluce];
            const correction = this.proposal.reduce(
                (res, color, index)=>
                {
                    const alreadyFound = this.proposal.some((c, i)=> {
                        return c == color ? this.soluce[i] == color : false;
                    });
                    if(this.soluce[index] == color) {
                        res.push("ok");
                        delete corrected[corrected.indexOf(color)];
                    }
                    else if(corrected.includes(color) && !alreadyFound ){
                        res.push("almost");
                        delete corrected[corrected.indexOf(color)];
                    }
                    else res.push("nok");
                    return res;
                },
                []
            );
            return this.sort(correction);
        } 
    },
    methods:{
        getColor(value){
            return value == "ok" 
                ? "green"
                : value == "almost"
                    ? "red"
                    : "black";
        },
        sort(array){
            return array.sort((a,b) => a!= 'ok' && b != 'nok'? 1 : -1);
        }
    },
}
</script>