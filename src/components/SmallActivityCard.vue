<template>
    <q-card class="card">

      <q-card-section>
        <div class="text-h5">{{company}}</div>

        <div class="text-subtitle2">期間: {{times}}</div>
        <div class="text-subtitle2">内容: {{content}}</div>
        <div class="text-subtitle2">使用言語: {{words}}</div>
        <div v-if="site" class="text-subtitle2">サイト: 
          <a :href="site">{{site}}</a>
        </div>        
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  name: 'CompanyCard',
  props:{
    company: String,
    image: String,
    times: String,
    content: String,
    words: String,
    github: String,
    site: String,
  }
}
</script>

<style lang="sass" scoped>
.card
  width: 100%
  max-width: 250px
  max-height: 500px
</style>
