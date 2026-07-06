import Reveal from "./Reveal";

const STRENGTHS = [
  {
    title: "デザインと実装を分けない",
    desc: "設計の段階から実装を見据えるので、デザインの意図が最後まで崩れません。",
  },
  {
    title: "世界観を守る実装",
    desc: "余白・動き・タイポグラフィまで、ブランドの空気感を崩さずWeb化します。",
  },
  {
    title: "運用まで含めた設計",
    desc: "CMSやフォームまで見据え、公開後に困らない仕組みを最初から用意します。",
  },
  {
    title: "少数精鋭で相談しやすい",
    desc: "3人だからやり取りがシンプル。担当者が直接、丁寧に対応します。",
  },
  {
    title: "雰囲気に合うビジュアル提案",
    desc: "ブランドのトーンに合わせて、写真や素材、色設計までご提案します。",
  },
  {
    title: "公開後の更新まで考える",
    desc: "更新しやすい構成にしておくことで、公開後も無理なく育てられます。",
  },
];

export default function Strength() {
  return (
    <section className="section" id="strength">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Our Strength</p>
          <h2 className="section-title">私たちの強み</h2>
        </Reveal>

        <div className="strength__grid">
          {STRENGTHS.map((s, i) => (
            <Reveal
              key={s.title}
              className="strength-item"
              delay={(i % 3) * 90}
            >
              <span className="strength-item__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="strength-item__title">{s.title}</h3>
              <p className="strength-item__desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
