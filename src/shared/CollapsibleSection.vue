<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open" @keyup.enter="open = !open">
                &#x25B2; Collapse
            </span>
            <span v-if="open" @click="open = !open" @keyup.enter="open = !open">
                &#x25BC; Expand
            </span>
        </div>
        <!-- inject stuff here -->
         <slot v-if="open">
            <div>DefaultContent</div>
         </slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(true);

</script>

<style scoped>
.header{
    background-color: 1px solid #bbb;
    padding: 20px;
    cursor: pointer;
    font-size: large;
}
</style>
