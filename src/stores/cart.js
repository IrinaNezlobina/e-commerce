export default {
    namespaced: true,

    state: {
        cart: [],
        // order: null,
        // orderData: null,
    },

    getters: {
        cart: (state) => state.data,
        // order: (state) => state.order,
        // orderData: (state) => state.orderData,
    },

    mutations: {
        // SET_DATA: (state, data) => {
        //     state.data = data;
        // },
        //
        // SET_ORDER: (state, o) => {
        //     state.order = o;
        // },
        //
        // SET_ORDER_DATA: (state, o) => {
        //     state.orderData = o;
        // },
    },

    actions: {
        // SetQualityAssessment(o, data) {
        //     return (async () => setQualityAssessment(data))();
        // },
        //
        // async ExportOrders(o, data) {
        //     try {
        //         return await exportOrders(data);
        //     } catch (e) {
        //         return e;
        //     }
        // },
    },
};
