<template>
  <q-layout view="lHh Lpr lFf">

    <div>
      <h2 class="text-center">massann's Page</h2>

      <div class="row justify-center">
        <img class="q-pr-md" alt="Quasar logo" src="./assets/pro.png">      

        <q-card class="flat bordered">
          <q-card-section>
            <div class="text-h5">UEC: 2017 ~ 2021</div>
            <div class="text-h5">UEC Master's Degree: 2021 ~</div>
          <q-separator />
            <div class="text-h6">趣味: ゲーム, ボドゲ, カラオケ</div>
            <div class="text-h6">好み言語: python, JS(Vue)</div>
            <div class="text-h6">嫁ポケ: ライチュウ</div>
            <div class="text-h6">最近セブンのレンチンできる焼きサバがおいしい</div>
            <div class="text-subtitle2">プロ画: @Cafe_Raichu(twitter)</div>
          </q-card-section>
          <!-- <q-separator />
          <q-card-actions vertical>
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions> -->
        </q-card>

      </div>      
    </div>

    <div class="q-pt-md">
      <h2 class="text-center">開発してたこと</h2>

      <div class="q-pa-md row items-start q-gutter-md justify-center">
        <div v-for="exprerience in expreriences" v-bind:key="exprerience.title">
          <Cord
            v-bind="exprerience"
          />
        </div>
      </div>
    </div>

    <div class="q-pt-md">
      <h2 class="text-center">業務経験</h2>

      <div class="q-pa-md row items-start q-gutter-md justify-center">
        <div v-for="company in companies" v-bind:key="company.company">
          <CompanyCord
            v-bind="company"
          />
        </div>
      </div>
    </div>

    <!-- <div class="q-pt-md">
      <h2 class="text-center">その他細々した活動</h2>

      <div class="q-pa-md row items-start q-gutter-md justify-center">
        <div v-for="exprerience in expreriences" v-bind:key="exprerience.title">
          <Cord
            v-bind="exprerience"
          />
        </div>
      </div>
    </div> -->

    <div class="q-pt-md bg-black text-white">
      <p class="q-mb-none q-pr-md text-right">Copyright © 2021 massann All Rights Reserved.</p>
    </div> 


  </q-layout>
</template>

<script>
import Cord from './components/Card.vue'
import CompanyCord from './components/CompanyCard.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Cord,
    CompanyCord
  },

  data () {
    return {
      expreriences: [
        {
          title: "ジェスチャーを用いたゲーム開発",
          image: "img/gesture.jpg",
          times: "2017/09 ~ 2017/11",
          content: "ゲーム作成",
          size: "チーム開発",
          words: "Unity",
          github: ""
        },
        {
          title: "深層学習を用いた皿の性質変換",
          image: "img/learning.jpg",
          times: "2018/06 ~ 2019/01",
          content: "深層学習",
          size: "１人",
          words: "python",
          github: ""
        },
        {
          title: "磁性流体を用いたコンテンツ開発",
          image: "img/slime.png",
          times: "2018/07 ~ 2018/12",
          content: "磁性流体の制御",
          size: "チーム開発",
          words: "C, Unity",
          github: "https://github.com/chamegashi/reration_of_slime"
        },
        {
          title: "疑似的ホログラム機器",
          image: "img/holo.jpg",
          times: "2019/06 ~ 2020/01",
          content: "アプリ作成",
          size: "チーム開発",
          words: "android",
          github: ""
        },
        {
          title: "LINE Bot 作成",
          image: "img/bot.png",
          times: "2019/10",
          content: "ボット作成",
          size: "１人",
          words: "python",
          github: ""
        },
        {
          title: "カラオケメモサイト",
          image: "img/web_app.png",
          times: "2019/12",
          content: "サイト作成",
          size: "１人",
          words: "python, vue",
          github: "https://github.com/chamegashi/karaoke-site"
        },
        {
          title: "スタートアップのウェブサイト開発",
          image: "img/notfound.png",
          times: "2020/03 ~ 2020/04",
          content: "バックエンド開発",
          size: "チーム開発",
          words: "JS",
          github: ""
        },
        {
          title: "読みやすいレイアウト提案",
          image: "img/layout.png",
          times: "2020/05 ~ 2021/01",
          content: "卒業論文",
          size: "１人",
          words: "python, vue",
          github: "https://github.com/chamegashi/hashigo"
        },
      ],
      companies: [
        {
          title: "電通大プログラミング教室",
          times: "2017/06 ~ 2018/05",
          content: "小中高学生に向けたプログラミング教室",
          words: "python",
          site: "https://www.uec-programming.com/"
        },
        {
          title: "日本データパシフィック",
          times: "2018/06 ~",
          content: "バグ修正・機能開発",
          words: "php, JS",
          site: "https://www.datapacific.co.jp/index.html"
        },
      ]
    }
  }
}
</script>

<style>
</style>
