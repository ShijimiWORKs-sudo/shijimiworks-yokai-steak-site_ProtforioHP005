import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Brand Website",
    jp: "ブランドサイト制作",
    desc: "ブランドサイト、コーポレートサイト、サービスサイトを設計・制作します。",
  },
  {
    title: "Landing Page",
    jp: "LP制作",
    desc: "商品やサービスの魅力を伝えるLPを、デザインから実装まで対応します。",
  },
  {
    title: "UI Design",
    jp: "UIデザイン",
    desc: "ユーザーが迷わず使える画面設計、情報設計、UIデザインを行います。",
  },
  {
    title: "Frontend Development",
    jp: "フロントエンド実装",
    desc: "React、Next.js、TypeScriptなどを使い、デザインを忠実にWeb上へ実装します。",
  },
  {
    title: "Backend / CMS",
    jp: "バックエンド・CMS",
    desc: "お問い合わせフォーム、CMS、記事管理、簡易管理画面などの導入をサポートします。",
  },
  {
    title: "Creative Direction",
    jp: "クリエイティブ・ディレクション",
    desc: "サイト全体の方向性、トーン、写真選定、コンテンツ構成を整理します。",
  },
];

export default function Service() {
  return (
    <section className="section section--alt" id="service">
      <div className="container">
        <Reveal className="service__head">
          <div>
            <p className="eyebrow">Service</p>
            <h2 className="section-title">できること</h2>
          </div>
          <p className="section-lead">
            デザインから実装、公開後の運用まで。ブランドに必要なWebのすべてを、少数精鋭のチームで一貫してお手伝いします。
          </p>
        </Reveal>

        <div className="service__grid">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              className="service-card"
              delay={(i % 3) * 90}
            >
              <span className="service-card__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__jp">{s.jp}</p>
              <p className="service-card__desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
