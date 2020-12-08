<template>
    <base-card>
        <h2>Find Your Coach</h2>
        <span class="filter-option">
            <input type="checkbox" id="PHP" checked @change="setFilter">
            <label for="PHP">PHP</label>
            <input type="checkbox" id="Laravel" checked @change="setFilter">
            <label for="Laravel">Laravel</label>
            <input type="checkbox" id="React" checked @change="setFilter">
            <label for="React">React</label>
            <input type="checkbox" id="Wordpress" checked @change="setFilter">
            <label for="Wordpress">Wordpress</label>
            <input type="checkbox" id="Vue" checked @change="setFilter">
            <label for="Vue">Vue</label>
        </span>
    </base-card>
</template>

<script>
    export default {
        emits:['change-filter'],
        data(){
            return{
                filters : {
                    PHP : true,
                    Laravel : true,
                    React : true,
                    Wordpress : true,
                    Vue : true
                }
            }
        },
        methods:{
            setFilter(event){
                const inputId = event.target.id;
                const isActive = event.target.checked;
                const updatedFilter = {
                    ...this.filters,
                    [inputId]:isActive
                };
                this.filters = updatedFilter;
                this.$emit('change-filter',updatedFilter);
            }
        }
    }
</script>

<style scoped>
    h2 {
        margin: 0.5rem 0;
    }

    .filter-option {
        margin-right: 1rem;
    }

    .filter-option label,
    .filter-option input {
        vertical-align: middle;
    }

    .filter-option label {
        margin-left: 0.25rem;
    }

    .filter-option.active label {
        font-weight: bold;
    }
</style>