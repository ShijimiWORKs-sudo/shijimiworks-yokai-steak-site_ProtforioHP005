import Reveal from "./Reveal";

const MEMBERS = [
  {
    initial: "D",
    role: "Designer",
    name: "Designer",
    tasks: ["ブランド設計", "UIデザイン", "ビジュアル設計", "写真・素材のトーン整理"],
    desc: "ブランドの空気感や商品の魅力を、余白・色・文字・写真のバランスで表現します。",
    mod: "member--1",
  },
  {
    initial: "F",
    role: "Frontend Engineer",
    name: "Frontend",
    tasks: ["HTML / CSS", "React / Next.js", "アニメーション", "レスポンシブ実装"],
    desc: "デザインの意図を崩さず、スマホでもPCでも美しく動くWebサイトとして実装します。",
    mod: "member--2",
  },
  {
    initial: "B",
    role: "Backend Engineer",
    name: "Backend",
    tasks: ["お問い合わせフォーム", "CMS", "API連携", "簡易管理機能"],
    desc: "更新や問い合わせ、データ管理など、サイト公開後の運用に必要な仕組みを整えます。",
    mod: "member--3",
  },
];

export default function Team() {
  return (
    <section className="section section--alt" id="team">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Team</p>
          <h2 className="section-title">3人の専門家</h2>
          <p className="section-lead">
            デザイン・フロントエンド・バックエンド。役割の異なる3人が、ひとつのチームとしてブランドのWebを形にします。
          </p>
        </Reveal>

        <div className="team__grid">
          {MEMBERS.map((m, i) => (
            <Reveal
              key={m.role}
              className={`member ${m.mod}`}
              delay={i * 120}
            >
              <div className="member__avatar" aria-hidden="true">
                <span>{m.initial}</span>
              </div>
              <p className="member__role">{m.role}</p>
              <h3 className="member__name">{m.name}</h3>
              <ul className="member__tasks">
                {m.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="member__desc">{m.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
