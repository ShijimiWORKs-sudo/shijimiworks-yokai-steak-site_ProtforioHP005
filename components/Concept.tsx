import Image from "next/image";
import Reveal from "./Reveal";

export default function Concept() {
  return (
    <section className="section" id="concept">
      <div className="container concept__grid">
        <Reveal className="concept__body">
          <p className="eyebrow">Concept</p>
          <h2 className="section-title">伝わる、を設計する。</h2>
          <p className="concept__lead">
            美しいだけでは、Webサイトは機能しません。
            <br />
            便利なだけでも、ブランドは伝わりません。
          </p>
          <p>
            ShijimiWORKsは、デザイン・フロントエンド・バックエンドの3つの視点から、見た目の美しさと使いやすさ、運用しやすさを両立したWebサイトを制作します。
          </p>
          <p>
            ブランドの空気感を大切にしながら、訪れた人が迷わず行動できるWeb体験を設計します。
          </p>
        </Reveal>

        <Reveal className="concept__figure" delay={120}>
          <Image
            src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=70"
            alt="自然光の差し込む上品なデスク。色見本やノートが整然と並ぶ制作現場。"
            fill
            sizes="(max-width: 820px) 90vw, 45vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
