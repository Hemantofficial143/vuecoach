<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="firstname">Firstname</label>
            <input type="text" id="firstname" v-model.trim="firstName">
        </div>
        <div class="form-control">
            <label for="lastname">Lastname</label>
            <input type="text" id="lastname" v-model.trim="lastName">
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea id="description" rows="5" v-model.trim="description"></textarea>
        </div>
        <div class="form-control">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate" v-model.number="rate">
        </div>
        <div class="form-control">
            <h3 >Expertise Area</h3>
            <div>
                <input type="checkbox" id="PHP" value="PHP" v-model="areas">
                <label for="PHP">PHP</label>
            </div>
            <div>
                <input type="checkbox" id="Laravel" value="Laravel" v-model="areas">
                <label for="Laravel">Laravel</label>
            </div>
            <div>
                <input type="checkbox" id="React" value="React" v-model="areas">
                <label for="React">React</label>
            </div>
            <div>
                <input type="checkbox" id="Wordpress" value="Wordpress" v-model="areas">
                <label for="Wordpress">Wordpress</label>
            </div>
            <div>
                <input type="checkbox" id="Vue" value="Vue" v-model="areas">
                <label for="Vue">Vue</label>
            </div>
        </div>
        <base-button>Register</base-button>
    </form>
</template>

<script>
export default {
    data(){
        return{
            firstName : '',
            lastName  : '',
            description : '',
            rate : null,
            areas : [],
        }
    },
    emits:['save-data'],
    methods:{
        submitForm(){
            const FormData = {
                first : this.firstName,
                last : this.lastName,
                desc : this.description,
                rate : this.rate,
                areas : this.areas
            }

            this.$emit('save-data',FormData);
        }
    }
}
</script>

<style scoped>
    .form-control {
        margin: 0.5rem 0;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input[type='checkbox'] + label {
        font-weight: normal;
        display: inline;
        margin: 0 0 0 0.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        font: inherit;
    }

    input:focus,
    textarea:focus {
        background-color: #f0e6fd;
        outline: none;
        border-color: #3d008d;
    }

    input[type='checkbox'] {
        display: inline;
        width: auto;
        border: none;
    }

    input[type='checkbox']:focus {
        outline: #3d008d solid 1px;
    }

    h3 {
        margin: 0.5rem 0;
        font-size: 1rem;
    }

    .invalid label {
        color: red;
    }

    .invalid input,
    .invalid textarea {
        border: 1px solid red;
    }
</style>