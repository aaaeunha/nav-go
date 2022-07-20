<template>
<div>
    <span><icon-relation /></span>
    <a-button type="primary" @click="handleShowDrawer">ccc</a-button>
    <opDrawer :visible="visible"/>
</div>
</template>
<script setup lang="ts">
import { onMounted,ref } from 'vue';
import ccRequest from '../../utils/ccRequest';
import opDrawer from './opDrawer.vue'
const visible = ref(false);
const handleOk = ()=>{
    visible.value = false
};
const handleCancel = ()=>{
    visible.value = false
};
const handleShowDrawer = ()=>{
    visible.value = true
}
onMounted(()=>{
    const data = ccRequest();
    console.log(data);
})
</script>
