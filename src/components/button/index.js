import ButtonComponent from './Button.vue'
const Button = {
    install:function(Vue){
        Vue.component('g-button',ButtonComponent)
    }
};

export default Button;