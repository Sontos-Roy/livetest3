// eslint-disable-next-line prettier/prettier
<script setup>
import "@/assets/teamview.css";
// import { ref } from "vue";
// import Modal from "../components/teams/Modal.vue";
// import TeamMember from "../components/teams/TeamMember.vue";
// import team from "@/team.json";
import TeamFooter from "../components/teams/TeamFooter.vue";
import TeamHeader from "../components/teams/TeamHeader.vue";
import TeamMain from "../components/teams/TeamMain.vue";
import { useTeamStore } from "../stores/TeamStore.js";

let team = useTeamStore();

team.fill();


// let showModal = ref(false);

// console.log(team);
</script>
<template>
  <TeamHeader/>  
  <TeamMain/>  
  <TeamFooter/>
  
</template>
