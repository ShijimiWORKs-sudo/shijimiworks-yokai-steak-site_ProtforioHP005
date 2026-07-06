"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "デザインだけの依頼はできますか？",
    a: "はい、可能です。UIデザインやビジュアル設計のみのご依頼も承っています。実装は別のチームで行う前提でも、データや意図が伝わる形でお渡しします。",
  },
  {
    q: "実装だけの依頼はできますか？",
    a: "はい、承れます。すでにデザインデータ（Figmaなど）がある場合、フロントエンド実装のみのご依頼も可能です。デザインの意図を崩さず丁寧に実装します。",
  },
  {
    q: "デザインから公開まで一括で依頼できますか？",
    a: "はい、もっとも得意とする進め方です。方向性の整理からデザイン、実装、CMS・フォーム導入、公開まで、3人のチームで一貫して対応します。",
  },
  {
    q: "写真や文章がまだなくても相談できますか？",
    a: "もちろんです。方向性の整理や構成づくりから一緒に進めます。写真の選定・トーン設計や、文章の構成についてもご提案できます。",
  },
  {
    q: "CMSやお問い合わせフォームも作れますか？",
    a: "はい。バックエンド担当が、CMSやお問い合わせフォーム、記事管理、簡易的な管理画面などの導入をサポートします。",
  },
  {
    q: "スマホ対応は含まれますか？",
    a: "はい、すべての制作でレスポンシブ対応を標準に含みます。PC・タブレット・スマホで崩れないよう設計・実装します。",
  },
  {
    q: "納期はどのくらいですか？",
    a: "内容によりますが、LPで約3〜4週間、ブランドサイトやコーポレートサイトで約1.5〜2.5ヶ月が目安です。ヒアリング後に具体的なスケジュールをご提示します。",
  },
  {
    q: "公開後の更新もお願いできますか？",
    a: "はい。月額の継続サポートで、更新や軽微な調整に対応します。ご自身で更新しやすいCMS構成でのお渡しも可能です。",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement | null>(null);
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        id={btnId}
        className="faq-item__q"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {q}
        <span className="faq-item__icon" aria-hidden="true" />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="faq-item__a"
        ref={answerRef}
        style={{
          maxHeight: open ? `${answerRef.current?.scrollHeight ?? 400}px` : 0,
        }}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">よくあるご質問</h2>
        </Reveal>

        <Reveal className="faq__list" delay={80}>
          {FAQS.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
