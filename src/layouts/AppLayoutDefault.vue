<script setup lang="ts">
import HeaderDefault from '@/components/layouts/HeaderDefault.vue'
</script>

<template>
  <el-container>
    <el-container>
      <el-header>
        <HeaderDefault />
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped></style>
