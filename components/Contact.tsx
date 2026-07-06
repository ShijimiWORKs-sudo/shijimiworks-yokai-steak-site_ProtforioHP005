"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 実送信は行いません（ポートフォリオ用のダミー完了表示）
    setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="contact__title">ご相談ください</h2>
          <p className="contact__lead">
            ブランドサイト、LP、コーポレートサイト、サービスサイトの制作について、お気軽にご相談ください。まだ内容が固まっていない段階でも、方向性の整理から一緒に進めます。
          </p>
          <div className="contact__info">
            <div>
              <span>Email</span>
              <p>hello@shijimiworks.example.com</p>
            </div>
            <div>
              <span>Hours</span>
              <p>平日 10:00 – 19:00</p>
            </div>
            <div>
              <span>Team</span>
              <p>Design ・ Frontend ・ Backend</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="form__done" role="status">
              <strong>Thank you.</strong>
              <p>
                お問い合わせありがとうございます。内容を確認のうえ、2〜3営業日以内にご返信します。
                <br />
                （こちらはポートフォリオ用のデモ表示です。実際の送信は行われません。）
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">
                  お名前 <em>*</em>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="山田 花子"
                />
              </div>
              <div className="field">
                <label htmlFor="company">会社名・屋号</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="株式会社〇〇"
                />
              </div>
              <div className="field field--full">
                <label htmlFor="email">
                  メールアドレス <em>*</em>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="field field--full">
                <label htmlFor="message">
                  相談したい内容 <em>*</em>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="制作したいサイトの種類や、実現したいことなどをお書きください。"
                />
              </div>
              <div className="field">
                <label htmlFor="scope">希望する制作範囲</label>
                <select id="scope" name="scope" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>デザインから公開まで一括</option>
                  <option>デザインのみ</option>
                  <option>実装のみ</option>
                  <option>UIデザインのみ</option>
                  <option>CMS / フォーム導入</option>
                  <option>まだ決まっていない</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="deadline">希望納期</label>
                <select id="deadline" name="deadline" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>1ヶ月以内</option>
                  <option>1〜2ヶ月</option>
                  <option>2〜3ヶ月</option>
                  <option>3ヶ月以上</option>
                  <option>相談したい</option>
                </select>
              </div>
              <div className="field field--full">
                <label htmlFor="budget">予算感</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>〜10万円</option>
                  <option>10〜20万円</option>
                  <option>20〜30万円</option>
                  <option>30〜50万円</option>
                  <option>50万円以上</option>
                  <option>相談したい</option>
                </select>
              </div>
              <div className="form__submit">
                <button type="submit" className="btn">
                  送信する <span className="btn__arrow">→</span>
                </button>
                <span className="form__note">
                  ※ デモ用フォームです。実際の送信は行われません。
                </span>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
