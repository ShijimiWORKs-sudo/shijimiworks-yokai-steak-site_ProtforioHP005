# ShijimiWORKs Design Studio — Portfolio HP 005

デザインに特化した3人チーム「ShijimiWORKs」の集客用ポートフォリオサイト（架空）です。
デザイナー・フロントエンドエンジニア・バックエンドエンジニアによる分業体制と、
デザインから実装・運用まで一貫対応できる強みを伝えることを目的としています。

- **サイト名**: ShijimiWORKs Design Studio
- **管理番号**: 005
- **サイト種別**: フリーランス（少数精鋭）デザインチーム用 集客HP
- **GitHubリポジトリ**: https://github.com/ShijimiWORKs-sudo/shijimiworks-yokai-steak-site_ProtforioHP005

---

## サイト概要

ブランドサイト・LP・コーポレートサイト・採用サイト・サービスサイトの制作依頼につなげる、
1ページ完結型（縦長スクロール）の集客ランディングページです。
洗練・上品・デザイン事務所らしい余白と大きなタイポグラフィで世界観を表現し、
Contactセクションの問い合わせフォームへ自然に導く構成にしています。

## 使用技術

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**（strict モード）
- **CSS**: `app/globals.css`（デザインシステムをCSS変数で一元管理）
- スクロール演出: `IntersectionObserver`（`components/Reveal.tsx`、`prefers-reduced-motion` に配慮）
- レスポンシブ対応（PC / タブレット / スマホ 375px）
- 画像最適化: `next/image`

## セクション構成

| # | セクション | 内容 |
|---|-----------|------|
| 1 | Hero | キャッチコピー、サブコピー、CTA（制作を相談する / 実績を見る） |
| 2 | Concept | 制作に対する考え方 |
| 3 | Service | 6つのサービス（Brand Website / LP / UI Design / Frontend / Backend・CMS / Creative Direction） |
| 4 | Works | 架空の制作実績6件（業種・担当範囲・説明・技術タグ） |
| 5 | Team | 3人チーム紹介（Designer / Frontend / Backend） |
| 6 | Strength | 私たちの強み6項目 |
| 7 | Process | 制作の流れ8ステップ |
| 8 | Price | 料金の目安 |
| 9 | FAQ | よくあるご質問8件（アコーディオン） |
| 10 | Contact | 問い合わせフォームUI（ダミー完了表示、実送信なし） |

グローバルナビはページ内アンカーリンク（Concept / Service / Works / Team / Process / Price / FAQ / Contact）。

## コンポーネント構成

```
app/
  layout.tsx      … メタデータ・OGP・全体レイアウト
  page.tsx        … 各セクションの組み立て
  globals.css     … デザインシステム / 全スタイル
  icon.svg        … ファビコン（自作SVG）
components/
  Header / Hero / Concept / Service / Works / Team /
  Strength / Process / Price / FAQ / Contact / Footer / Reveal
public/
  og.svg          … OGP画像（自作SVG）
```

---

## 画像・イラスト素材の出典と商用利用可否

### 写真素材（Unsplash）

Hero・Concept・Works（6件）の写真は **Unsplash** の素材を使用しています。

- **出典サイト**: https://unsplash.com/
- **ライセンス**: Unsplash License
- **ライセンス確認先URL**: https://unsplash.com/license
- **商用利用**: ✅ 可（無料・商用利用可・帰属表示は任意）

使用画像URL一覧：

| 用途 | 画像URL |
|------|---------|
| Hero（デザインスタジオの作業風景） | https://images.unsplash.com/photo-1531403009284-440f080d1e12 |
| Concept（上品なデスク） | https://images.unsplash.com/photo-1517142089942-ba376ce32a2e |
| Works 1（コスメLP） | https://images.unsplash.com/photo-1596462502278-27bfdc403348 |
| Works 2（ライフスタイルショップ） | https://images.unsplash.com/photo-1441986300917-64674bd600d8 |
| Works 3（写真家ポートフォリオ） | https://images.unsplash.com/photo-1452587925148-ce544e77e70d |
| Works 4（アパレルEC） | https://images.unsplash.com/photo-1445205170230-053b83016050 |
| Works 5（美容サロン） | https://images.unsplash.com/photo-1560066984-138dadb4c035 |
| Works 6（デザイン事務所） | https://images.unsplash.com/photo-1497366216548-37526070297c |

> Unsplash License は商用・非商用ともに無料で利用でき、帰属表示は任意です。
> 人物が主題ではない写真（デスク・空間・物）を優先的に選定し、モデルリリース／商標リスクに配慮しています。

### 自作素材（第三者素材なし）

以下は第三者素材を使わず、CSSグラデーション・SVGで自作しているため **商用利用可**（著作権上の懸念なし）です。

- Heroの背景（CSSグラデーション）
- Teamの3人分アバター（CSSグラデーション + イニシャル。人物写真は不使用でモデルリリース不要）
- OGP画像 `public/og.svg`（自作SVG）
- ファビコン `app/icon.svg`（自作SVG）
- 各セクションの区切り・アイコン類（CSS / 疑似要素）

### 素材利用に関する確認結果

- 参考サイトの画像・写真・文章・ロゴ・固有名詞は一切使用していません。
- 使用素材はすべて商用利用可能な無料素材、または自作素材です。
- ライセンスが曖昧な素材は使用していません。

---

## セットアップ

### 必要環境
- Node.js 18.17 以上（推奨: 20 以上）

### インストール
```bash
npm install
```

### 起動方法（開発サーバー）
```bash
npm run dev
# http://localhost:3000
```

### 型チェック
```bash
npm run typecheck
```

### ビルド方法
```bash
npm run build
npm run start   # 本番サーバー起動
```

Windows で `npm` が使えない場合は `npm.cmd` に読み替えてください。

---

## アクセシビリティ / SEO

- 適切な見出し階層（h1 → h2 → h3）
- 画像の `alt` 属性、装飾要素は `aria-hidden`
- フォームは `label` と入力を紐付け、必須項目を明示
- キーボード操作対応、`:focus-visible` のフォーカスリング、本文スキップリンク
- `prefers-reduced-motion` でアニメーションを無効化
- `title` / `description` / OGP / Twitter Card を `app/layout.tsx` に設定

---

## ライセンス / 注意

本サイトはポートフォリオ掲載用に制作した架空のサンプルです。
掲載している会社名・チーム・実績・料金・連絡先はすべて架空のものです。
