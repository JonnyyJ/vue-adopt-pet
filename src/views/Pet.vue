<template>
    <div>
        <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
        <p>{{ animal.breed }}</p>
        <p>{{ animal.gender }}</p>
       
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
        animal: {}
    };
  },
  computed:{
      ...mapState([
          'cats',
           'dog',
      ])
  },
   mounted(){
      
          const animal = this[this.$route.params.species][this.$route.params.id]
          this.animal = animal
          
  }
};
</script>