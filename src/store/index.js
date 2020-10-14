import Vue from 'vue'
import Vuex from 'vuex'
import db from '../utils/database.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [],
        filter: 'active'
    },
    getters: {
        getItems(state) {
            if (state.filter === 'active') return state.items.filter((item) => item.active);
            if (state.filter === 'completed') return state.items.filter((item) => !item.active);
            return state.items;
        },
        getFilter(state) {
            return state.filter;
        }
    },
    mutations: {
        addItem(state, item) {
            state.items.push(item);
            db.saveItems(state.items);
        },
        deleteItem(state, id) {
            state.items = state.items.filter((item) => item.id !== id);
            db.saveItems(state.items);
        },
        deleteCompletedItems(state) {
            state.items = state.items.filter((item) => item.active);
            db.saveItems(state.items);
        },
        toggleStarred(state, item) {
            item.starred = !item.starred;
            db.saveItems(state.items)
        },
        toggleActive(state, item) {
            item.active = !item.active;
            db.saveItems(state.items)
        },
        setItems(state, items) {
            state.items = items;
        },
        setFilter(state, filter) {
            state.filter = filter;
        }
    },
    actions: {
        loadItems(context) {
            const items = db.loadItems()
            context.commit('setItems', items)
        }
    }
})
