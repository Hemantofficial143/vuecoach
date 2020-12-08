<template>
  <section>
    <coach-filter @change-filter="setFilter"></coach-filter>
  </section>
  <section>
    <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button link to="/register">Register As Coach</base-button>
    </div>
    <ul v-if="hasCoaches" >
      <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
      />
    </ul>
    <h3 v-else >No Coaches Found !!</h3>
    </base-card>
  </section>
</template>
<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
  components: {CoachItem,CoachFilter},
  data(){
    return {
      activeFilters : {
        PHP:true,
        Laravel : true,
        React:true,
        Wordpress : true,
        Vue : true,
      }
    }
  },
  computed:{
    filteredCoaches(){
      const coaches =  this.$store.getters['coaches'];
      return coaches.filter( (coach => {
        if(this.activeFilters.PHP && coach.areas.includes('PHP')){
          return true;
        }
        if(this.activeFilters.Laravel && coach.areas.includes('Laravel')){
          return true;
        }
        if(this.activeFilters.React && coach.areas.includes('React')){
          return true;
        }
        if(this.activeFilters.Wordpress && coach.areas.includes('Wordpress')){
          return true;
        }
        if(this.activeFilters.Vue && coach.areas.includes('Vue')){
          return true;
        }
        return false;
      }))
    },
    hasCoaches() {
      return this.$store.getters['hasCoaches'];
    }
  },
  methods:{
    setFilter(updatedFilters){
      this.activeFilters = updatedFilters;
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>