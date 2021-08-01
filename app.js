const APP = {
    data() {
        return {
            placeholderString: 'todo...',
            title: 'Todos',
            inputValue: '',
            todos: [
                { id: 1, title: 'js-1' },
                { id: 2, title: 'js-2' },
                { id: 3, title: 'js-3' },
            ],
        };
    },
    methods: {
        addTodo() {
            if (this.inputValue !== '') {
                const todo = {
                    id: Date.now(),
                    title: this.inputValue,
                };
                this.todos.push(todo);
                this.inputValue = '';
            }
        },
        deleteTodo(id) {
            this.todos = this.todos.filter((t) => t.id !== id);
        },
    },
    computed: {
        multTodos() {
            return this.todos.length * 2;
        },
    },
    watch: {
        inputValue(newValue) {
            if (newValue.length > 30) {
                this.inputValue = '';
            }
        },
    },
};
Vue.createApp(APP).mount('#app');
