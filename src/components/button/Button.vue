<script>
    export default{
        name:'g-button',
        props:[],
        render(createElement){
            return createElement(
                'button',
                {
                  class: ['g-button'],
                },
                this.$slots.default
            )
        },
        methods:{}
    }
</script>