<template>
  <div class="counter">
    <h1>Counter Page</h1>

    <br><br> 
    <h1>{{ counter.count }}</h1>
    <button @click="counter.increment()" :disabled="!counter.remaining">increment ({{ counter.remaining }})</button>
    <button @click="counter.decrement()" >decrement ({{ counter.remaining }})</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/CounterStore';

let counter = useCounterStore();


</script>
  