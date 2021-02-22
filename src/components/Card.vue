<template>
    <q-card class="card">
      <img v-if="image" :src="image" style="height:180px">
      <img v-else src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h5">{{title}}
          <a v-if="github" :href="github">
            <img src="../assets/github.png" class="github">
          </a>
        </div>

        <div class="text-subtitle2">期間: {{times}}</div>
        <div class="text-subtitle2">内容: {{content}}</div>
        <div class="text-subtitle2">規模: {{size}}</div>
        <div class="text-subtitle2">使用言語: {{words}}</div>
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  name: 'Card',
  props:{
    title: String,
    image: String,
    times: String,
    content: String,
    size: String,
    words: String,
    github: String,
  }
}
</script>

<style lang="sass" scoped>
.card
  width: 280px
  height: 370px

.github
  width: 22px
</style>
