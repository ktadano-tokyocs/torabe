# とらべ Design System

**Brand**: とらすとベース フリースクール（とらべ）  
**Operator**: NPO法人東京コミュニティスクール (TCS)  
**Location**: 〒165-0026 東京都中野区新井2-35-2  
**Contact**: TEL 03-5318-9700  
**Instagram**: [@torabe_freeschool](https://www.instagram.com/torabe_freeschool/)

---

## About

とらすとベース フリースクール（通称：とらべ）は、東京都中野区にある少人数制フリースクール。2004年設立のNPO法人東京コミュニティスクール（TCS）の第2校として開校。未来の予測が難しい環境の中でも、子どもたちが自らの可能性を信じ、自分軸を育てながら学べる場所。

**教育理念**: 「歩いてもいい、止まってもいい」 歩止歩止（HodoHodo）

- 「歩」く … 右足と左足、両足で自分のペースで学んでいく
- 「止」まる … 止まることも動き。自分の現在地を知り、振り返る
- 「つながる」 … スタッフ・仲間・保護者とのつながりの中で育ちあう

**4つの特長**: 日本語（表現力）/ 探究（なぜ？を追う）/ 原体験（アウトドア）/ 個別評価（成長で見守る）

---

## Sources

| リソース | パス / URL |
|---|---|
| LP コードベース | `torabe-lp/` (local mount) |
| メイン LP | `torabe-lp/index.html` |
| 参考分析メモ | `torabe-lp/nitobe_site_analysis.md` |
| Instagram | https://www.instagram.com/torabe_freeschool/ |

---

## CONTENT FUNDAMENTALS

### トーン＆ボイス

- **語り口**: 保護者（＝読み手）への温かい語りかけ。「です・ます」調で丁寧。
- **視点**: 「子どもたち一人ひとり」が主語。「あなたのお子さん」への共感・寄り添いを重視。
- **感情**: 不安を受け止め → 共感 → 安心 → 希望へ導く流れ。押しつけがない。
- **コピーの長さ**: 見出しは体言止め・短文。本文は2〜4文。箇条書きを多用して読みやすく。
- **キャッチコピー例**:
  - 「歩いてもいい、止まってもいい」
  - 「その選択肢の一つとして、とらべがあります。」
  - 「よく来てくれたね」
  - 「合うかどうか一緒に考えましょう」

### カナ・漢字・表記

- 施設名は「とらすとベース フリースクール」または「とらべ」（ひらがな）
- スペースで区切る（とらすとベース＋スペース＋フリースクール）
- 数字は半角。単位は日本語（円・時間・回など）
- 英語ラベルは uppercase（Concept, Features, Staff, FAQ…）でセクション補助として使用

### 絵文字・記号

- **絵文字は使わない**（Material Icons Outlined を使用）
- チェックマークは `✓`（テキスト）を用いることあり
- 省略・強調には `「」` 括弧を使う

---

## VISUAL FOUNDATIONS

### カラーシステム

| 役割 | 名前 | HEX |
|---|---|---|
| Primary | Teal Green | `#0B9B88` |
| Primary Dark | Teal Dark | `#0a7c6d` |
| Secondary | Amber Yellow | `#FDB813` |
| Secondary Hover | Yellow | `#FFD54F` / `#FACC15` |
| Background | Light Gray | `#F9FAFB` |
| Surface | White | `#FFFFFF` |
| Text Main | Dark Gray | `#333333` |
| Text Sub | Medium Gray | `#6B7280` |
| Text Muted | Light Gray | `#9CA3AF` |
| Accent Green (bg) | Teal Tint | `#E6F5F2` |
| Accent Yellow (bg) | Yellow Tint | `#FFF9E6` |
| Border | Light | `#E5E7EB` / `#F3F4F6` |
| Error / Alert | Red | `#EF4444` |

**Color vibe**: 自然・成長・信頼を感じさせるティール×アンバーの補色関係。温かみと落ち着きのバランス。

### タイポグラフィ

- **Primary font**: Noto Sans JP（Google Fonts）
- **Weights used**: 400 (regular), 500 (medium), 700 (bold), 900 (black)
- **Display**: 漢字 `歩 止 歩 止` は 5xl〜7xl (48px〜72px) で太字
- **Heading**: 2xl〜3xl (24px〜30px), font-bold
- **Body**: sm〜base (14px〜16px), font-normal / font-medium
- **Caption/Label**: xs (12px), tracking-widest, uppercase（英語ラベル）
- **Line height**: leading-relaxed (1.625)

### スペーシング・レイアウト

- セクション上下パディング: `py-10`（40px）
- カードのパディング: `p-6`〜`p-8` (24px〜32px)
- セクション幅: `max-w-4xl`〜`max-w-7xl` + auto margins
- グリッド: 1カラム（mobile）→ 2〜3カラム（md+）

### ボーダー・シャドウ・角丸

- **角丸**: cards → `rounded-2xl` (16px); buttons → `rounded-full`; small elements → `rounded-xl` (12px)
- **シャドウ**: `shadow-sm`（通常）→ `shadow-md`（hover）→ `shadow-lg`（CTA）
- **ボーダー**: `border border-gray-100` (通常カード); `border border-primary/20` (アクセントカード)

### アニメーション・トランジション

- **Scroll fade-in**: `opacity: 0; transform: translateY(24px)` → visible（`transition 0.6s ease`）
- **Hover state**: `transform hover:-translate-y-0.5` + shadow deepening
- **Button press**: ripple effect（radial gradient expand）+ `hover:scale-105`
- **CTA pulsing**: `box-shadow` pulse animation（2s infinite）on primary CTA
- **Accordion**: `max-height` + `opacity` transition（0.35s ease）
- **Header**: hide-on-scroll-down / show-on-scroll-up（`transform` translateY）
- **Bounce**: `animate-bounce` on scroll hint arrow

### 画像スタイル

- **Hero background**: 六角形モザイク（子どもたちの活動コラージュ）を `opacity: 0.65` でオーバーレイ
- **Hero scrim**: `linear-gradient(to bottom, rgba(255,255,255,0.55) …)` で読みやすさ確保
- **タイトルロゴ**: 手書きクレヨン風の多色カタカナ（`title.png`）— ブランドの「子どもらしさ」を象徴
- **サービスロゴ**: 緑T字＋葉っぱ＋人物アイコンの丸形マーク（`torabe-log.png`）
- **写真**: 自然光・暖色系。子どもたちの笑顔・活動の様子。顔写真はスタッフのみ掲載

### 背景・テクスチャ

- セクションは白 (`bg-white`) と薄グレー (`bg-background-light: #F9FAFB`) を交互に
- アクセントセクションは `bg-accent-green (#E6F5F2)` または `bg-accent-yellow (#FFF9E6)`
- CTAセクション: `bg-primary (#0B9B88)` with `text-white`
- ブラー: ヘッダーに `backdrop-blur-sm`; モーダル系に `backdrop-blur`

---

## ICONOGRAPHY

### アイコンシステム

**Google Material Icons Outlined** を CDN で使用。

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
<span class="material-icons-outlined">icon_name</span>
```

**よく使うアイコン**:

| アイコン名 | 用途 |
|---|---|
| `auto_awesome` | 特長 |
| `lightbulb` | コンセプト |
| `schedule` | スケジュール |
| `groups` | スタッフ |
| `place` | アクセス |
| `help_outline` | FAQ |
| `event_available` | 見学申込 CTA |
| `directions_walk` | 「歩」く |
| `pan_tool` | 「止」まる |
| `people` | つながる |
| `menu_book` | 日本語 |
| `explore` | 探究 |
| `forest` | 原体験 |
| `trending_up` | 個別評価 |
| `star` | 評価・星 |
| `keyboard_arrow_down` | スクロールヒント |

**SVG アセット**:
- `assets/volunteer-logo.svg` — ボランティア募集バナー
- `assets/torabe-log.png` — メインロゴ（緑・白背景用）
- `assets/torabe-log-white.png` — ロゴ白抜き（ヘッダー背景など）

**使い方**: アイコンは単独で使わず必ずテキストラベルと組み合わせる。サイズは `text-2xl`〜`text-4xl`。カラーは context に合わせて `text-primary` / `text-secondary` / `text-white`。

---

## File Index

```
/
├── README.md                    ← このファイル（ブランド概要・設計方針）
├── SKILL.md                     ← Agent Skill定義
├── colors_and_type.css          ← CSS変数（カラー・タイポ・スペーシング）
├── assets/
│   ├── torabe-log.png           ← メインロゴ（カラー版）
│   ├── torabe-log-white.png     ← ロゴ白版（ヘッダー用）
│   ├── title.png                ← 手書きタイトル画像
│   ├── background.png           ← ヒーロー六角形モザイク背景
│   ├── torabe-house.webp        ← 施設外観写真
│   ├── volunteer-logo.svg       ← ボランティア募集バナー
│   ├── emachan.jpg              ← スタッフ写真（永易）
│   ├── inabi.jpg                ← スタッフ写真（稲葉）
│   └── yuyu.jpg                 ← スタッフ写真（大知里）
├── preview/                     ← Design System カードHTML
│   ├── colors-brand.html
│   ├── colors-semantic.html
│   ├── colors-surface.html
│   ├── type-scale.html
│   ├── type-japanese.html
│   ├── spacing-tokens.html
│   ├── shadows-radii.html
│   ├── buttons.html
│   ├── cards.html
│   ├── icons.html
│   ├── logos.html
│   └── animations.html
└── ui_kits/
    └── lp/
        ├── README.md
        ├── index.html           ← LP インタラクティブ再現
        ├── Header.jsx
        ├── Hero.jsx
        ├── Concept.jsx
        ├── Features.jsx
        ├── Staff.jsx
        └── CTASection.jsx
```
