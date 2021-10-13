export default {
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
          github: "",
          dialogText: "サークル活動にて、学園祭の出し物としてゲームを開発した。内容は、kinect のモーションキャプチャーで、ある特定のジェスチャーを入力として遊ぶシューティングゲーム。まっさんはゲーム開発の一員として活動した。ゲーム開発には Unity を利用している。また、ゲームオブジェクト作成のため、blendar を利用した。\n\nなお、遊んでくれた人は２０人に満たなかった模様。",
          dialogTech: "Unity, blender, git",
        },
        {
          title: "深層学習を用いた皿の性質変換",
          image: "img/learning.jpg",
          times: "2018/06 ~ 2019/01",
          content: "深層学習",
          size: "１人",
          words: "python",
          github: "",
          dialogText: "大学の授業にて作成。CycleGAN を用いた皿の性質変換を行った。このシステムを用いることで、木目->白皿 or 白皿->木目 というお皿の柄を変更できるようになった。",
          dialogTech: "python, PyTorch",
        },
        {
          title: "磁性流体を用いたコンテンツ開発",
          image: "img/slime.png",
          times: "2018/07 ~ 2018/12",
          content: "磁性流体の制御",
          size: "チーム開発",
          words: "C, Unity",
          github: "https://github.com/chamegashi/reration_of_slime",
          dialogText: "サークル活動にて、磁性流体を用いたコンテンツ開発を行った。磁性流体は砂鉄を入れたスライムを利用しており、このスライムを利用した球体スクリーンなどを開発した。学園祭にて展示し、フィードバックを得ることができた。",
          dialogTech: "C#, kinect, Unity",
        },
        {
          title: "疑似的ホログラム機器",
          image: "img/holo.jpg",
          times: "2019/06 ~ 2020/01",
          content: "アプリ作成",
          size: "チーム開発",
          words: "android",
          github: "",
          dialogText: "大学の授業にて作成。グループ活動で何かしらのコンテンツの開発を行う授業であった。そこでは、ホログラムをより身近に体験できるようにするためのプロダクトを開発した。プロダクトは筐体とアプリの２種類を用意し、ユーザがどちらを使用するか選べるようにしている。まっさんはアプリ製作を行った。android を用いて、軽量な学習モデルを実行して簡単に疑似的なホログラムを体験できるようにした。",
          dialogTech: "git, android",
        },
        {
          title: "何かしらの Bot 作成",
          image: "img/bot.png",
          times: "2019/09 ~ 2019/12",
          content: "ボット作成",
          size: "１人",
          words: "python, JS",
          github: "",
          dialogText: "当時、まっさんは Bot 開発にハマっており、いくつかのボットを作成している。LINE Bot では、ハマっていたソシャゲのツールアプリを製作した。また、他にも discord の Bot 作成なども行っていた。いずれも webhock を利用したシステムとなっており、作成したものを heroku などにあげて、http リクエストが飛んできた際に処理を行うという形にしている。",
          dialogTech: "heroku, python",
        },
        {
          title: "カラオケメモサイト",
          image: "img/web_app.png",
          times: "2019/12",
          content: "サイト作成",
          size: "１人",
          words: "python, vue",
          github: "https://github.com/chamegashi/karaoke-site",
          dialogText: "愛用していたカラオケメモアプリのサポートが終了し、不便になってしまったため、自作でメモサイトを作成した。当初、ios での開発を行い、簡易的なアプリは作成したが、\n・build して２週間しか保持できないこと\n・このアプリのために１万円を支払ってアプリをストアに申請するのか...\nとなったため、web アプリとして運用することにした。現在も私的利用のために運用中。ゆくゆくはログイン制にして他のユーザも使えるようにできたらいいな...",
          dialogTech: "heroku, python, flask, Vue, Vuetify, MySQL",
        },
        {
          title: "スタートアップのウェブサイト開発",
          image: "img/notfound.png",
          times: "2020/03 ~ 2020/04",
          content: "バックエンド開発",
          size: "チーム開発",
          words: "JS",
          github: "",
          dialogText: "",
          dialogTech: "express, React, postgreSQL",
        },
        {
          title: "読みやすいレイアウト提案",
          image: "img/layout.png",
          times: "2020/05 ~ 2021/01",
          content: "卒業論文",
          size: "１人",
          words: "python, vue",
          github: "https://github.com/chamegashi/hashigo",
          dialogText: "",
          dialogTech: "python, flask, Vue",
        },
        {
          title: "複数配信がちょっと見えるシステム",
          image: "img/vol7.png",
          times: "2021/03",
          content: "ハッカソン",
          size: "３人",
          words: "python, vue, twitterApi, youtubeApi",
          github: "https://github.com/Popinpon/UECTechMate1",
          dialogText: "友人と参加したハッカソンで作成したシステム。ハッカソンのお題は「オンラインイベントがより楽しくなるようなもの」。まっさんのグループでは、オンラインイベントの別枠配信の状況が少しわかるようなシステムを作成。zoom の画面キャプチャや、youtubeAPI, twitterAPI を用いて情報を収集し、一つの web サイトに集約した。",
          dialogTech: "python, flask, Vue, tailwind, twitterAPI, youtubeAPI",
        },
        {
          title: "旅行プラン投稿アプリ",
          image: "img/notfound.png",
          times: "2021/09",
          content: "ハッカソン",
          size: "５人",
          words: "React, Next",
          github: "https://github.com/averak/DeNA-hack-2021",
          dialogText: "",
          dialogTech: "React, Next",
        },
        {
          title: "カラオケ配信検索アプリ",
          image: "img/notfound.png",
          times: "2021/10",
          content: "個人開発",
          size: "１人",
          words: "React, Next",
          github: "https://github.com/chamegashi/karaokeSearch",
          dialogText: "",
          dialogTech: "React, Next, python",
        },
      ],
      interns: [
        {
          company: "アスクル株式会社",
          content: "LOHACO の改善",
          times: "2019/09",
          period: "５日間",
          size: "４人",
          words: "python, vue, twitterApi, youtubeApi",
        },
        {
          company: "クックパッド株式会社",
          content: "新規レシピサイトの作成",
          times: "2021/03",
          period: "５日間",
          size: "個人",
          words: "Next.js, GrathQL",
        },
        {
          company: "株式会社サイバーエージェント",
          content: "新規ショッピングサイトの作成",
          times: "2021/03",
          period: "２日間",
          size: "個人",
          words: "Vue",
        },
        {
          company: "クックパッド株式会社",
          content: "講義や、IOS開発のOJT",
          times: "2021/9",
          period: "１０日間",
          size: "個人",
          words: "React, IOS, SwiftUI",
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
          radarData: [5, 4, 4, 3, 1, 2],
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
          radarData: [5, 2, 2, 1, 4, 3],
          color: ["0", "0", "255"]
        }
      ],
    }
  },
}