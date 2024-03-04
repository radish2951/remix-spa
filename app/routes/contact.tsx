import type { MetaFunction } from "@remix-run/node";
import GenerateMeta from "~/components/meta";
import Comment from "~/components/comment";

export const meta: MetaFunction = () => {
  return GenerateMeta("お問い合わせ！", "私は池田大輝だ！");
};

export default function Indx() {
  return (<p>お問い合わせ！</p>
  );
};
