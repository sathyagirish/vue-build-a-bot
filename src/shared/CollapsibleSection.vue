<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open=!open">&#25B2; Collapse </span>
            <span v-if="open" @click="open=!open">&#25BC; Expand </span>
        </div>
        <!-- inject stuff here -->
         <slot v-if="open">
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
    padding: 3px;
    cursor: pointer;
    font-size: large;
}
</style>