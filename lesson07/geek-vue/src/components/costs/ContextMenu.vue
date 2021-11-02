<template>
    <div class="wrapper"
        v-if="params.header"
        v-bind:style="{top: this.coorY, left: this.coorX}"
    >
        <div class="header">{{ params.header }} {{ params.item.id }}</div>
        <div class="content">
            <button @click="onEdit">Edit</button>
            <br/>
            <button :disabled="isDisabledDel" @click="onDelete">Delete</button>
        </div>
        <div class="content">
            <button @click="onClose">Close</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContextMenu',

    //
    data() {
        return {
            isDisabledDel: false
        }
    },

    //
    props: {
        params: {
            type: Object,
            required: true
        }
    },

    computed: {
        coorX() {
            return (+this.params.left - 70) + 'px';
        },

        coorY() {
            return (+this.params.top + 20) + 'px';
        }
    },

    methods: {
        onClose() {
            this.$menu.hide();
        },

        onEdit() {
            this.$menu.hide();
            this.$router.push({name: 'addPayment', query: {id: this.params.item.id}});
        },

        onDelete() {
            this.isDisabledDel = true;
            //
            this.$store.dispatch('costsDelFromPaymentsList', this.params.item)
                .then((/*data*/) => {
                    //console.log(data);
                    this.$menu.hide();
                })
                .catch((/*error*/) => {
                    //console.log(error);
                });
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    border: 1px solid lightblue;
    position: absolute;
    /*top: 0;*/
    /*left: 0;*/
    /*bottom: 0;
    right: 0;*/
    width: 150px;
    height: 100px;
    background: lightgray;
    
    /*
    &.overlay {
        z-index: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(68, 61, 61, 0.5);
    }
    */

    &.content {
        position: relative;
        z-index: 100;
    }
}
</style>
