//
const state = {
    paymentsList: [],
    categoryList: [],
    nextId: 0,
};

//
const getters = {
    costsGetPaymentsList: (state) => {
        return state.paymentsList;
    },

    costsGetFullPaymentValue: (state) => {
        return state.paymentsList.reduce((total, item) => total + item.value, 0);
    },

    costsGetCategoryList: (state) => {
        return state.categoryList;
    },
};

//
const mutations = {
    costsSetPaymentsList(state, payload) {
        state.paymentsList = payload;
        state.nextId = 17;
    },

    costsAddToPaymentsList(state, payload) {
        payload.id = state.nextId++;
        state.paymentsList.push(payload)
    },

    costsUpdatePaymentsItem(state, payload) {
        state.paymentsList = [
            ...state.paymentsList.slice(0, payload.index),
            payload.item,
            ...state.paymentsList.slice(payload.index+1)
        ];
    },

    costsDelFromPaymentsList(state, payload) {
        state.paymentsList = payload;
    },

    costSetCategoryList(state, payload) {
        if (!Array.isArray(payload)) {
            payload = [payload];
        }
        
        state.categoryList.push(...payload);
    },
};

//
const actions = {
    costsFetchPaymentsList(context, items) {
        /*
        const itemList = [
            { id: 1, date: "23.03.2020", category: "Travel", value: 169 },
            { id: 2, date: "24.03.2020", category: "Transport", value: 360 },
            { id: 3, date: "25.03.2020", category: "Food", value: 532 },
            { id: 4, date: "24.04.2020", category: "Travel", value: 180 },
            { id: 5, date: "25.04.2020", category: "Transport", value: 371 },
            { id: 6, date: "26.04.2020", category: "Food", value: 543 },
            { id: 7, date: "25.05.2020", category: "Travel", value: 191 },
            { id: 8, date: "26.05.2020", category: "Transport", value: 382 },
            { id: 9, date: "27.05.2020", category: "Food", value: 554 },
            { id: 10, date: "26.06.2020", category: "Travel", value: 202 },
            { id: 11, date: "27.06.2020", category: "Transport", value: 393 },
            { id: 12, date: "28.06.2020", category: "Food", value: 565 },
            { id: 13, date: "27.07.2020", category: "Travel", value: 213 },
            { id: 14, date: "28.07.2020", category: "Transport", value: 404 },
            { id: 15, date: "29.07.2020", category: "Food", value: 576 },
            { id: 16, date: "03.08.2012", category: "Travel", value: 999 },
        ];
        */

        return new Promise((resolve/*, reject*/) => {
                setTimeout(() => {
                    resolve(items);
                }, 1000);
            })
            .then(response => {
                //console.log(response); 
                context.commit('costsSetPaymentsList', response);
                //resolve(response);
            })
            .catch(error => {
                console.log(error);
                //reject(error);
            });
    },

    costsGetPaymentsItem(context, id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const find = state.paymentsList.find(item => item.id === id);
                if (find) {
                    resolve(find);
                }
                reject('Error: not found');
            }, 1000);
        })
        .then(response => {
            //console.log(response); 
            //resolve(response);
            return response;
        });
        /*
        .catch(error => {
            console.log(error);
            //reject(error);
            return error;
        });
        */
    },

    costsAddToPaymentsList(context, item) {
        return new Promise((resolve/*, reject*/) => {
            setTimeout(() => {
                resolve(item);
            }, 1000);
        })
        .then(response => {
            //console.log(response); 
            context.commit('costsAddToPaymentsList', response);
            //resolve(response);
        })
        .catch(error => {
            console.log(error);
            //reject(error);
        });
    },

    costsUpdatePaymentsItem(context, item) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = state.paymentsList.findIndex(elem => elem.id === item.id);
                if (index < 0) {
                    reject('Error: not found');
                }

                const payload = {index, item};
                resolve(payload);
            }, 1000);
        })
        .then(response => {
            //console.log(response); 
            context.commit('costsUpdatePaymentsItem', response);
            //resolve(response);
        });
        /*
        .catch(error => {
            console.log(error);
            //reject(error);
        });
        */
    },

    costsDelFromPaymentsList(context, item) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = state.paymentsList.findIndex(elem => elem.id === item.id);
                if (index < 0) {
                    reject('Error: not found');
                }

                const newList = [...state.paymentsList.slice(0, index), ...state.paymentsList.slice(index+1)];
                resolve(newList);
            }, 1000);
        })
        .then(response => {
            //console.log(response); 
            context.commit('costsDelFromPaymentsList', response);
            //resolve(response);
        })
        .catch(error => {
            console.log(error);
            //reject(error);
        });
    },

    costsFetchCategoryList(context) {
        const items = ['Travel', 'Transport', 'Food', 'Education'];
        
        return new Promise((resolve/*, reject*/) => {
            setTimeout(() => {
                resolve(items);
            }, 1000);
        })
        .then(response => {
            //console.log(response); 
            context.commit('costSetCategoryList', response);
            //resolve(response);
        })
        .catch(error => {
            console.log(error);
            //reject(error);
        });
    },

    costsAddToCategoryList(context, item) {
        return new Promise((resolve/*, reject*/) => {
            setTimeout(() => {
                resolve(item);
            }, 1000);
        })
        .then(response => {
            //console.log(response); 
            context.commit('costSetCategoryList', response);
            //resolve(response);
        })
        .catch(error => {
            console.log(error);
            //reject(error);
        });
    }
};

//
export default {
    state,
    mutations,
    actions,
    getters
}
