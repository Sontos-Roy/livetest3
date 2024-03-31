<script setup>
    defineProps({
        name: String,
        email: String,
        status: String
    })

</script>

<template>

    <tr class="team-tr">
              <td>
                <div
                  class="d-flex align-item-center justify-content-start bg-muted"
                >
                  <div class="picture">
                    <img :src="`https://i.pravatar.cc/150?u=${email}`" alt="" />
                  </div>
                  <div class="name ps-4">
                    <h2><b>{{ name }}</b></h2>
                  </div>
                </div>
              </td>
              <td>
                <div
                  class="d-flex align-item-center justify-content-center bg-muted"
                >
                  <h4 class="text-muted"><b>{{ email }}</b></h4>
                </div>
              </td>
              <td>
                <div
                  class="d-flex align-item-center justify-content-center bg-muted"
                >
                  <h4 class="text-info">{{ status }}</h4>
                </div>
              </td>
            </tr>

</template>