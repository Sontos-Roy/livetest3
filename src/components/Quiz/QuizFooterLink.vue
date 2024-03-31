<template>
    <div>
        <!-- <h5>{{ key }}</h5> -->
        <h5>{{ state.name }}</h5>

        <button @click="state.name = 'hello world'">click me</button>
        <!-- <button @click="changed">{{ name }}</button> -->

        <ul>
            <li><a href="#">Get a Job</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
</template>

<script setup>
import { state } from '../../stores/quizStore';



</script>