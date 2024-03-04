import type { MetaFunction } from "@remix-run/node";
import GenerateMeta from "~/components/meta";

export const meta: MetaFunction = () => {
  return GenerateMeta("わーくす！");
};

export default function Indx() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>作品集だよ！</h1>
      <ul>
        <li><a href="/">ホーム</a></li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/future/spa-mode"
            rel="noreferrer"
          >
            SPA Mode Guideだぜ
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
