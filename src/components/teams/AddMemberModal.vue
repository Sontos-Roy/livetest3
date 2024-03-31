<script setup>
import { useTeamStore } from '@/stores/TeamStore';
import Modal from './Modal.vue';
import { ref } from 'vue';

let team = useTeamStore();

let showModal = ref(false);
</script>

<template>
    <header>
    <div class="d-flex justify-content-between mt-2">
      <button class="btn btn-rounded btn-primary" :disabled="! team.spotsRemaining" @click="showModal = true">
        Add Member ({{ team.spotsRemaining }} Spot left)
      </button>
      <div class="logo">
        <h3>:-)<span class="text-info">{{ team.name }}</span> Team <span class="badge bg-info rounded-circle">{{ team.spots }}</span></h3>
      </div>
    </div>
  </header>

    <teleport to='body' >
    <Modal :show="showModal" @close="showModal = false">
    <template #default>
      <form action="">
        <input type="text" class="form-control" placeholder="Add Member Name">
        <button type="submit" class="btn btn-outline-success btn-sm mt-2">Add Member</button>
      </form>
    </template>
    </Modal>  
  </teleport>
</template>