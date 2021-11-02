<template>
    <div class="home">
        <geek-test-component message="WoW" />
    </div>
</template>

<script>
import GeekTestComponent from '@/components/TestComponent';

export default {
    name: 'GeekTesting',
  
    //
    components: {
        GeekTestComponent
    }
}
</script>
