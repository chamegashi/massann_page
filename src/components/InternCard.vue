<template>
    <q-card class="card">

      <q-card-section class="rerative card-text">

        <div class="text-subtitle2">期間: {{times}}</div>
        <div class="text-subtitle2">内容: {{content}}</div>
        <div class="text-subtitle2">規模: {{size}}</div>
        <div class="text-subtitle2">使用言語: {{words}}</div>

        <!-- <q-dialog v-model="isModalOpen" transition-show="flip-down" transition-hide="flip-up">
          <q-card class="bg-grey-1 text-grey-9" style="width:80%; max-width:1500px">
            <q-bar>
              <q-space />
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip content-class="bg-grey-1 text-grey-9">Close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card-section>
              <div class="flex justify-center">
                <div style="width:40%; height:100%; max-width:500px; max-height:1000px">
                  <div class="text-h5 text-center text-weight-bold q-mb-md">{{title}}</div>
                  <div class="q-mb-md dialog-text text-body1">{{dialogText}}</div>
                  <div class="text-h5 text-center q-mb-md">使用した技術とか</div>
                  <div class="q-mb-md text-body1">{{dialogTech}}</div>
                </div>
                <div style="width:40%; max-width:500px">
                  <div>
                    <img src="img/layout.png">
                  </div>
                  <div>
                    <div class="text-h5">{{title}}</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
                    </div>
                    <div class="text-h5 text-center text-weight-bold">仕様技術</div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog> -->

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
    dialogText: String,
    dialogTech: String,
  },
  data() {
    return {
      isModalOpen: false,
    }
  },
}
</script>

<style lang="sass" scoped>
.card
  width: 280px
  height: 150px

.card-text
  height: 150px

.github
  width: 22px

.popup
  width: 22px

.dialog-text
  white-space: pre-wrap

</style>
