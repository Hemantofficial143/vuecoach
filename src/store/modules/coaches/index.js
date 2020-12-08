import mutations from './mutations.js';
import getters from './getter';
import actions from './actions.js';
export default {
    namespace : true,
    state(){
        return {
            coaches:[
                {
                    id:'c1',
                    firstName : 'Hemant',
                    lastName : 'Jangid',
                    areas : ['PHP','Laravel','Vue'],
                    description : 'I am Hemant Jangid',
                    hourlyRate : 30,
                },
                {
                    id:'c2',
                    firstName : 'Ravi',
                    lastName : 'Koriya',
                    areas : ['PHP','Laravel','React'],
                    description : 'I am Ravi koriya',
                    hourlyRate : 50,
                },
                {
                    id:'c3',
                    firstName : 'Avinash',
                    lastName : 'Zala',
                    areas : ['PHP','Wordpress'],
                    description : 'I am Avinash Zala',
                    hourlyRate : 50,
                },
                {
                    id:'c4',
                    firstName : 'Urvashi ',
                    lastName : 'Khatri',
                    areas : ['Wordpress'],
                    description : 'I am Urvashi Khatri',
                    hourlyRate : 40,
                }
            ]
        }
    },
    mutations,
    actions,
    getters
};