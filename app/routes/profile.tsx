import type { MetaFunction } from "@remix-run/node";
import GenerateMeta from "~/components/meta";
import Comment from "~/components/comment";

export const meta: MetaFunction = () => {
  return GenerateMeta("プロフィール！", "私は池田大輝だ！");
};

export default function Indx() {
  return (<p>プロフィール！</p>
  );
}
