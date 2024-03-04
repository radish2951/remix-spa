import { Link } from "@remix-run/react";
import { Comment } from "~/components/comment";
import { Button } from "~/components/button";

export default function Index() {
  return (
    <>
      <div className="welcome character-comment">
        <p>私たちが案内します！</p>
        <div>
          <img src="https://blooming-spectrum.com/sakurairo-tetraprism/img/aoi.png" />
          <img src="https://blooming-spectrum.com/sakurairo-tetraprism/img/mio.png" />
          <img src="https://blooming-spectrum.com/sakurairo-tetraprism/img/hatsune.png" />
          <img src="https://blooming-spectrum.com/sakurairo-tetraprism/img/haruka.png" />
        </div>
      </div>

      <h2>❄️最新作『さくらいろテトラプリズム』鋭意制作中❄️</h2>
      <p>
        恋愛ファンタジーアドベンチャーゲーム『さくらいろテトラプリズム』<br />
        2024年公開に向けて一生懸命つくっています！ ご期待ください！
      </p>

      <Comment character="mio">
        というわけで、私たちが案内していきますね！
      </Comment>
      <Comment character="aoi">
        ま、待って、澪ちゃん。知らない人が見たら「いきなり何！？」ってびっくりしちゃうよ。
      </Comment>
      <Comment character="hatsune">
        私たちは『さくらいろテトラプリズム』っていうゲームのキャラクターよ。二度と説明しないからちゃんと覚えてよね。
      </Comment>

      <Comment character="haruka">手厳しい。</Comment>

      <hr />

      <h2>メンバー紹介</h2>

      <Comment character="mio">
        メンバー紹介！　いえーい！　というわけで葵さんからどうぞ！
      </Comment>
      <Comment character="aoi">
        えっ！　えーと、<b>柏木葵（かしわぎ・あおい）</b>です！　趣味は料理です！　よろしくお願いします！
      </Comment>
      <Comment character="mio">
        じゃあ次はこの明石が！　<b>明石澪（あかし・みお）</b>です！　高校1年生です！　趣味は、うーん……いろいろ！　じゃあ次は初音さん！
      </Comment>
      <Comment character="hatsune">
        騒がしいわね。私は<b>須磨初音（すま・はつね）</b>。これ以上はプライベートだからノーコメントよ。
      </Comment>
      <Comment character="haruka">
        最後は私か。<b>桐咲春花（きりさき・はるか）</b>。アイドルやってるよ。応援してくれたらうれしい。
      </Comment>
      <Comment character="aoi">
        私たちが登場するゲーム『さくらいろプリズム』と『さくらいろテトラプリズム』をぜひよろしくお願いしますっ！
      </Comment>
      <Comment character="haruka">
        私たちのコメントを消す「ちゃちゃを入れない」ボタンがあったはずなんだけど、いつの間にか消えてる。
      </Comment>
      <Comment character="hatsune">
        別にちゃちゃを入れてるつもりはないんだけど。
      </Comment>
      <Comment character="mio">
        そういうのを「ちゃちゃを入れる」って言うんですよ！
      </Comment>

      <hr />

      <h2>このサイトについて</h2>

      <Comment character="aoi">
        「池田大輝って誰？」という人はまずはプロフィールページをご覧ください！
      </Comment>
      <Button to="/profile">池田大輝のプロフィール</Button>

      <Comment character="mio">監督さんの作品集はここから見れます！</Comment>

      <Button to="/works">池田大輝の作品集</Button>

      <Comment character="hatsune">イラストも掲載してるのね。</Comment>

      <Button to="/gallery">池田大輝のイラスト集</Button>

      <Comment character="haruka">
        お仕事のオファーやメッセージも受け付けてるよ。
      </Comment>

      <Button to="/contact">池田大輝へのご連絡</Button>

      <hr />

      <h2>Twitter</h2>
      <p>
        日々の出来事などを気ままに書いています。お気軽にフォローしてください🐣
      </p>

      <Comment character="hatsune">Twitter？　エックスでしょ。</Comment>
      <Comment character="haruka">まあ、わかるよ。</Comment>

      <hr />

      <h2>pixivFANBOX</h2>

      <p>
        制作にまつわるあれこれをpixivFANBOXに投稿しています。<br />
        創作に対する考えとか、いろいろ書いています📝
      </p>

      <Comment character="aoi">
        ブログみたいな感じだね。よかったら読んであげてくださいな。
      </Comment>

      <Button to="https://radish2951.fanbox.cc/">池田大輝のpixivFANBOX</Button>
    </>
  );
};