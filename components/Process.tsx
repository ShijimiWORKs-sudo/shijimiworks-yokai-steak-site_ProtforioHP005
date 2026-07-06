import Reveal from "./Reveal";

const STEPS = [
  { title: "お問い合わせ", desc: "フォームからご連絡ください。まだ内容が固まっていなくても大丈夫です。" },
  { title: "ヒアリング", desc: "目的・ターゲット・世界観・ご予算などを丁寧にお聞きします。" },
  { title: "方向性・構成整理", desc: "サイトのゴールと全体構成、トーンを一緒に整理します。" },
  { title: "デザイン制作", desc: "ブランドの空気感を反映したデザインを作成します。" },
  { title: "フロントエンド実装", desc: "デザインを忠実に、レスポンシブで美しく実装します。" },
  { title: "バックエンド・CMS設定", desc: "フォームやCMSなど、運用に必要な仕組みを構築します。" },
  { title: "確認・修正", desc: "実機で確認いただき、細部まで調整します。" },
  { title: "公開・納品", desc: "公開作業を行い、更新方法までお渡しします。" },
];

export default function Process() {
  return (
    <section className="section section--deep" id="process">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Process</p>
          <h2 className="section-title">制作の流れ</h2>
          <p className="section-lead">
            ご相談から公開まで、8つのステップで進めます。各段階で確認を挟みながら、無理なく形にしていきます。
          </p>
        </Reveal>

        <div className="process__list">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} className="process-step">
              <span className="process-step__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="process-step__title">{s.title}</h3>
                <p className="process-step__desc">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
