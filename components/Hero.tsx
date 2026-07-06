import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div>
          <p className="hero__eyebrow reveal is-visible">
            ShijimiWORKs Design Studio
          </p>
          <h1 className="hero__title">
            Design, Frontend,
            <br />
            <em>Backend.</em>
          </h1>
          <p className="hero__jp">
            伝わるデザインを、
            <br />
            動くWebサイトへ。
          </p>
          <p className="hero__sub">
            ShijimiWORKsは、デザイナー・フロントエンドエンジニア・バックエンドエンジニアの3人で、ブランドの世界観をWebサイトとして形にする制作チームです。
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn">
              制作を相談する <span className="btn__arrow">→</span>
            </a>
            <a href="#works" className="btn btn--ghost">
              実績を見る
            </a>
          </div>
          <div className="hero__meta">
            <div>
              <strong>03</strong>
              <span>Specialists</span>
            </div>
            <div>
              <strong>Design</strong>
              <span>× Development</span>
            </div>
            <div>
              <strong>Brand</strong>
              <span>First Approach</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <Image
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=70"
            alt="余白を活かしたデザインスタジオの作業風景。デスクの上に並ぶノートとデバイス。"
            fill
            sizes="(max-width: 860px) 90vw, 40vw"
            priority
          />
          <div className="hero__badge">
            <span>Web Design Team</span>
            <p>ブランドの空気感を、Webへ。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
