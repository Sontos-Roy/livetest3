<!-- eslint-disable vue/valid-v-for -->
<script setup>
import { useTeamStore } from '@/stores/TeamStore';
import TeamMember from './TeamMember.vue';

let team = useTeamStore();
</script>

<template>
<main>
    <div class="container">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col" class="text-center"><b>Name</b></th>
              <th scope="col" class="text-center"><b>Email</b></th>
              <th scope="col" class="text-center"><b>Status</b></th>
            </tr>
          </thead>
          <tbody class="">
            <TeamMember
              v-for="member in team.members"
              :name="member.name"
              :email="member.email"
              :status="member.status" />
            
          </tbody>
        </table>
        <div class="text-end text-muted" v-show="!team.spotsRemaining">
          <b>There are no remaining team spots. Upgrade to add more.</b>
        </div>
      </div>
    </div>
  </main>
</template>