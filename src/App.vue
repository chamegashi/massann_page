<template>
  <q-layout view="hHh Lpr lfl" class="bg-grey-1 text-grey-9">

    <q-header elevated>
      <q-toolbar class="glossy bg-black">
        <!-- <q-btn @click="drawer = !drawer" flat round dense icon="menu" class="q-mr-sm" /> -->

        <q-toolbar-title>massann's Page</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500">
      <q-scroll-area class="fit bg-grey-1 text-grey-9">
        <q-list padding class="menu-list">
          <a href="#profile">
          <q-item href="#profile" clickable v-ripple>
            <q-item-section>
              <img src="./assets/profile_icon.png" style="width: 35px">
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold text-grey-9">
              Profile
            </q-item-section>
          </q-item>
          </a>

          <q-item href="#skill" clickable v-ripple>
            <q-item-section avatar>
              <img src="./assets/skill_icon.png" style="width: 35px">
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold">
              Skill
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <img src="./assets/PC_icon.png" style="width: 35px">
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold">
              Products
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <img src="./assets/work_icon.png" style="width: 35px">
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold">
              Works
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer> -->

      <q-page-container>
        <q-page>
          <div>
            <h1 class="text-center q-py-xl q-mb-md text-weight-bolder">massann's Page</h1>
          </div>

          <div name="profile" class="q-my-xl q-pt-xl flex justify-center row">
            <img class="q-pr-lg" src="./assets/profile_icon.png" style="width: 80px">
            <span class="text-h2 text-center text-weight-bold">Profile</span>
          </div>

          <div>
            <div class="row justify-center text-text-grey-9">
              <img class="q-mx-xl q-px-xl" src="./assets/pro.png">
              <div class="flex justify-center" style="width:35%">
                <div class="text-h5 full-width">学歴: UEC 2017 ~ 2021, UEC's master 2021 ~</div>
                <div class="text-h5 full-width">好みの言語: python, JS(Vue)</div>
                <div class="text-h5 full-width">好みの CSS FW: tailwind</div>
                <div class="text-h5 full-width">就きたい職: Web フロントエンジニア</div>
                <div class="text-h5 full-width">嫁ポケ: ライチュウ</div>
                <div class="text-subtitle2 full-width">プロ画: @Cafe_Raichu(twitter)</div>
              </div>
            </div>
          </div>

          <div name="skill" class="q-my-xl q-pt-xl flex justify-center row">
            <img class="q-pr-md" src="./assets/skill_icon.png" style="width: 80px">
            <span class="text-h2 text-center text-weight-bold">Skill</span>
          </div>

          <div class="flex justify-center">
            <Radar v-for="radar in radarData" :key="radar" v-bind="radar" style="width: 25%"/>
          </div>

          <div class="q-mt-xl items-start q-gutter-md border flex justify-center">
            <div class="q-px-lg q-py-md rounded-borders" style="border:solid; border-color: #cccccc; border-width: 1px; width:35%">
                <div class="text-h6 full-width q-py-xs">5 - 趣味や業務で頻繁に使用する</div>
                <div class="text-h6 full-width q-py-xs">4 - 趣味や業務でよく使用する</div>
                <div class="text-h6 full-width q-py-xs">3 - ある程度使用できる</div>
                <div class="text-h6 full-width q-py-xs">2 - 興味はあるが、あまりわからない</div>
                <div class="text-h6 full-width q-py-xs">1 - 興味はあるが、まったくわからない</div>
            </div>
          </div>


          <div name="products" class="q-my-xl q-pt-xl flex justify-center row">
            <img class="q-pr-md" src="./assets/PC_icon.png" style="width: 80px">
            <span class="text-h2 text-center text-weight-bold">Products</span>
          </div>

          <div>
            <div class="q-pa-md row items-start q-gutter-md justify-center">
              <div v-for="exprerience in expreriences" v-bind:key="exprerience.title">
                <Cord
                  v-bind="exprerience"
                />
              </div>
            </div>
          </div>

          <div name="works" class="q-my-xl q-pt-xl flex justify-center row">
            <img class="q-pr-md" src="./assets/work_icon.png" style="width: 80px">
            <span class="text-h2 text-center text-weight-bold">Works</span>
          </div>

          <div>
            <div class="q-pa-md row items-start q-gutter-md justify-center">
              <div v-for="company in companies" v-bind:key="company.company">
                <CompanyCord
                  v-bind="company"
                />
              </div>
            </div>
          </div>

          <div class="q-pt-md q-mt-xl bg-black text-white">
            <p class="q-mb-none q-pr-md text-right">Copyright © 2021 massann All Rights Reserved.</p>
          </div> 

        </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
import Cord from './components/Card.vue'
import CompanyCord from './components/CompanyCard.vue'
import Radar from './components/Radar.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Cord,
    CompanyCord,
    Radar
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
        {
          title: "複数配信がちょっと見えるシステム",
          image: "img/vol7.png",
          times: "2021/03",
          content: "ハッカソン",
          size: "３人",
          words: "python, vue, twitterApi, youtubeApi",
          github: "https://github.com/Popinpon/UECTechMate1"
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
      ],
      radarData: [
        {
          label: "frontend",
          labels: ["Vue.js", "JS/TS", "CSS FW", "React", "jest", "WebSecurity"],
          radarData: [5, 4, 4, 1, 2, 2],
          color: ["255", "0", "0"]
        },
        {
          label: "backend",
          labels: ["python", "flask", "Rails", "php", "debian", "SQL"],
          radarData: [5, 4, 1, 4, 3, 3],
          color: ["0", "180", "0"]
        },
        {
          label: "devOption",
          labels: ["git", "docker", "AWS", "Firebase", "npm", "webpack"],
          radarData: [5, 2, 3, 1, 4, 3],
          color: ["0", "0", "255"]
        }
      ],
      drawer: false,
    }
  }
}
</script>

<style>
</style>
