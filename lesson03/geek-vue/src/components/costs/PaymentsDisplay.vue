<template>
    <table class="main-table">
        <thead>
            <tr>
                <th>#</th><th>Date</th><th>Category</th><th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, ind) in items" :key="ind">
                <td>{{ ind+1 }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'CostPaymentsDisplay',

    //
    props: {
        items: {
            type: Array,
            default: () => [],
            required: true
        }
    }
}
</script>


<style lang="scss" scoped>
.main-table {
  border-collapse: collapse;
}

td { 
    padding: 10px 20px;
    border: 1px solid black;
}
</style>