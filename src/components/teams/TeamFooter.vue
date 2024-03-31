<script setup>

import { useTeamStore } from '@/stores/TeamStore';

let team = useTeamStore();

</script>


<template>
    <footer class="bg-muted p-3 mt-3 rounded shadow">
    <h4 class="text-center">{{ team.name }} - <span>{{ team.spots }}</span> Member Team</h4>
  </footer>
</template>