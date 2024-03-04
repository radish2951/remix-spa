import type { MetaFunction } from "@remix-run/node";
import GenerateMeta from "~/components/meta";
import { Comment } from "~/components/comment";

export const meta: MetaFunction = () => {
  return GenerateMeta("あばうと！", "私は池田大輝だ！");
};

export default function Indx() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (SPA Mode)</h1>
      <Comment character="hatsune">初音ちゃんだぞー！</Comment>
      <Comment character="hatsune">これは見えてるのかしら？</Comment>
      <Comment>見えているようね。</Comment>
      <p>じゃあちょっと、落書きでもしますか！　さて、これはどのように見えているのかな？</p>
    </div>
  );
}
