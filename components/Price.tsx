import Reveal from "./Reveal";

const PRICES = [
  { name: "ブランドサイト制作", en: "Brand Website", value: "250,000" },
  { name: "LP制作", en: "Landing Page", value: "150,000" },
  { name: "コーポレートサイト制作", en: "Corporate Site", value: "300,000" },
  { name: "UIデザインのみ", en: "UI Design", value: "80,000" },
  { name: "フロントエンド実装のみ", en: "Frontend", value: "100,000" },
  { name: "CMS / フォーム導入", en: "CMS / Form", value: "50,000" },
];

export default function Price() {
  return (
    <section className="section section--alt" id="price">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Price</p>
          <h2 className="section-title">料金の目安</h2>
          <p className="section-lead">
            プロジェクトに応じた明快な料金設定。まずはご予算に合わせて、最適な進め方をご提案します。
          </p>
        </Reveal>

        <div className="price__grid">
          {PRICES.map((p) => (
            <Reveal key={p.name} className="price-row">
              <span className="price-row__name">
                <strong>{p.name}</strong>
                <span>{p.en}</span>
              </span>
              <span className="price-row__value">
                ¥{p.value}
                <em> 〜</em>
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal as="div">
          <div
            className="price-row"
            style={{
              borderTop: "1px solid var(--line)",
              marginTop: "1px",
              background: "var(--surface)",
              borderRadius: "0 0 6px 6px",
            }}
          >
            <span className="price-row__name">
              <strong>継続サポート</strong>
              <span>Monthly Support</span>
            </span>
            <span className="price-row__value">
              ¥30,000<em> / 月 〜</em>
            </span>
          </div>
          <p className="price__note">
            内容、ページ数、撮影・素材制作の有無、CMS導入範囲により変動します。まずはお気軽にご相談ください。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
