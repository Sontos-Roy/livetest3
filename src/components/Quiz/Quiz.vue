<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <QuizHeader></QuizHeader>
    
        <QuizQuestion></QuizQuestion>
      <h2>{{ name }}</h2>

    <QuizFooter/>
</template>

<script setup>

// import { provide } from 'vue';
import QuizFooter from './QuizFooter.vue';
import QuizHeader from './QuizHeader.vue';
import QuizQuestion from './QuizQuestion.vue';


</script>