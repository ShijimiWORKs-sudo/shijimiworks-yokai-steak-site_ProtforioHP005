import Image from "next/image";
import Reveal from "./Reveal";

const WORKS = [
  {
    title: "Bloom Cosmetics LP",
    category: "Cosmetics / LP",
    role: "Design ・ Frontend",
    desc: "新作スキンケアの世界観を伝える縦長LP。余白と大きな写真で、質感と信頼感を演出しました。",
    tags: ["Figma", "Next.js", "TypeScript", "Vercel"],
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=70",
    alt: "淡い背景に並ぶコスメティックのボトル。上品なコスメブランドLPのイメージ。",
  },
  {
    title: "Kinari Lifestyle Store",
    category: "Lifestyle / Brand Site",
    role: "Direction ・ Design ・ Frontend",
    desc: "暮らしの道具を扱うショップのブランドサイト。写真の世界観を主役に、静かな導線を設計しました。",
    tags: ["Figma", "React", "CMS", "GitHub"],
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=70",
    alt: "ナチュラルな雑貨が並ぶライフスタイルショップの店内。",
  },
  {
    title: "Hikari Photography Portfolio",
    category: "Photographer / Portfolio",
    role: "Design ・ Frontend",
    desc: "フリーランス写真家の作品を美しく見せるポートフォリオ。作品が主役になるミニマルな構成。",
    tags: ["Figma", "Next.js", "TypeScript"],
    img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=70",
    alt: "光を捉えた写真作品が並ぶ、写真家のポートフォリオサイトのイメージ。",
  },
  {
    title: "Étoffe Apparel",
    category: "Apparel / EC Landing",
    role: "Design ・ Frontend ・ Backend",
    desc: "小規模アパレルブランドのEC導線サイト。商品からカートまで、迷わない購入体験を実装しました。",
    tags: ["Figma", "Next.js", "Node.js", "CMS"],
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=70",
    alt: "ハンガーに掛かった衣類が整然と並ぶアパレルブランドのイメージ。",
  },
  {
    title: "Lumo Beauty Salon",
    category: "Beauty / Booking Site",
    role: "Design ・ Frontend ・ Backend",
    desc: "美容サロンの予約導線付きサイト。世界観を保ちつつ、予約フォームまでスムーズに繋げました。",
    tags: ["Figma", "React", "Node.js", "Vercel"],
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=70",
    alt: "清潔感のある美容サロンの空間。予約導線付きサイトのイメージ。",
  },
  {
    title: "Studio Aoi Corporate",
    category: "Design Studio / Corporate",
    role: "Direction ・ Design ・ Frontend",
    desc: "デザイン事務所のコーポレートサイト。実績と姿勢を、余白の効いたレイアウトで伝えました。",
    tags: ["Figma", "Next.js", "TypeScript", "CMS"],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=70",
    alt: "明るく整ったデザイン事務所のオフィス空間。",
  },
];

export default function Works() {
  return (
    <section className="section" id="works">
      <div className="container">
        <Reveal className="service__head">
          <div>
            <p className="eyebrow">Works</p>
            <h2 className="section-title">制作実績</h2>
          </div>
          <p className="section-lead">
            ※ 掲載している実績はポートフォリオ用に制作した架空のサンプルです。デザインと実装の方向性の参考としてご覧ください。
          </p>
        </Reveal>

        <div className="works__grid">
          {WORKS.map((w, i) => (
            <Reveal key={w.title} className="work-card" delay={(i % 2) * 110}>
              <div className="work-card__media">
                <span className="work-card__cat">{w.category}</span>
                <Image
                  src={w.img}
                  alt={w.alt}
                  fill
                  sizes="(max-width: 720px) 90vw, 45vw"
                />
              </div>
              <div className="work-card__body">
                <h3 className="work-card__title">{w.title}</h3>
                <p className="work-card__role">{w.role}</p>
                <p className="work-card__desc">{w.desc}</p>
                <ul className="tags">
                  {w.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
