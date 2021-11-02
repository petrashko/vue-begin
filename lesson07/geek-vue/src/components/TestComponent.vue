<template>
    <div>The message is: {{ message }}</div>
</template>

<script>
export default {
    name: 'GeekTestComponent',

    props: {
        message: String,
    }
}
</script>
