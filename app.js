const app = new Vue({
    el: '#app',
    data() {
        return{
            inputValue: '',
            list: [] 
        }
    },
    methods: {
        add() {
            if (this.inputValue.length === 0) {
                return;
            } else {
            this.list.push({value: this.inputValue, selected: false}),
            this.inputValue = ''
            }
        },
        deleteItem(index) {
            this.list.splice(index, 1)
        }
    },
    computed: {
        selectedItems(){ 
            return this.list.filter(item => item.selected)
        },
    }
})