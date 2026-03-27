# Instagram 画像の組み込み手順書

**対象ファイル**: `index-v3.html`
**対象セクション**: `<!-- ===== 10. SNS / Instagram ===== -->`
**Instagramアカウント**: [@torabe_freeschool](https://www.instagram.com/torabe_freeschool/)

---

## 概要

現在のInstagramセクションはプレースホルダー（グラデーション＋カメラアイコン）で表示されています。
実際の投稿写真を表示するには、以下の3つの方法があります。

| 方法 | 難易度 | コスト | 自動更新 | 推奨シーン |
|---|---|---|---|---|
| **A. 手動（画像差し替え）** | ★☆☆ | 無料 | なし（手動） | まず動かしたい、更新頻度が低い |
| **B. サードパーティサービス** | ★★☆ | 無料〜有料 | 自動 | 技術的工数を減らして自動化したい |
| **C. Instagram Graph API** | ★★★ | 無料（API） | 自動 | サーバーがあり、完全カスタマイズしたい |

> **初期リリースは方法Aを推奨。** 運用が安定したら方法BまたはCへ移行する。

---

## 方法A：手動で画像を差し替える（基本）

### ステップ1: 使用する投稿を6枚選ぶ

選定の目安：
- 子どもたちの活動の様子が伝わる写真
- 明るく清潔感のある画像
- **顔が写っている場合は保護者の使用許諾を事前に確認する**

### ステップ2: 画像をダウンロード・配置する

1. Instagramの投稿を開き、画像を保存する
   （PCブラウザで右クリック → 名前を付けて保存）
2. 以下の命名規則で `images/` フォルダに保存する：

   ```
   torabe-lp/images/
   ├── instagram_01.jpg
   ├── instagram_02.jpg
   ├── instagram_03.jpg
   ├── instagram_04.jpg
   ├── instagram_05.jpg
   └── instagram_06.jpg
   ```

3. 画像を最適化する（推奨）：
   - サイズ：600×600px（正方形）
   - ファイルサイズ：200KB 以下
   - 圧縮ツール：[Squoosh](https://squoosh.app/)（ブラウザで無料）

### ステップ3: index-v3.html を編集する

Instagram セクションの6枚のプレースホルダーカードを `<img>` タグに置き換える。

**置き換え前（プレースホルダー例）:**

```html
<a href="https://www.instagram.com/torabe_freeschool/" target="_blank" rel="noopener noreferrer"
   class="block aspect-square rounded-xl overflow-hidden group cursor-pointer">
    <div class="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <span class="material-icons-outlined text-primary text-3xl md:text-4xl mb-2">photo_camera</span>
        <span class="text-primary font-bold text-xs md:text-sm">探究の時間</span>
    </div>
</a>
```

**置き換え後（実画像）:**

```html
<a href="https://www.instagram.com/torabe_freeschool/" target="_blank" rel="noopener noreferrer"
   class="block aspect-square rounded-xl overflow-hidden group cursor-pointer">
    <img src="images/instagram_01.jpg"
         alt="探究の時間 - とらすとベース フリースクール"
         class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
         loading="lazy"
         width="600" height="600">
</a>
```

6枚分（`instagram_01.jpg` 〜 `instagram_06.jpg`）を同じ要領で差し替える。

> **特定の投稿ページへリンクしたい場合**は `href` をその投稿のURL（例: `https://www.instagram.com/p/XXXXXXX/`）に変更する。

### 更新する際の手順

新しい投稿に差し替えたいときは以下を行う：
1. Instagramから新しい画像をダウンロード・圧縮
2. `images/instagram_XX.jpg` を上書き保存
3. ブラウザのキャッシュをクリアして確認（Cmd+Shift+R）

更新目安：**月1回〜四半期に1回**

---

## 自動更新にしたい場合

方法Aは手動での更新が必要ですが、以下の方法を使うとInstagramへ投稿するだけで自動的にLPへ反映されます。

---

### 方法B：サードパーティサービスを使う（自動・簡単）

Instagramのフィードを自動取得して表示してくれる外部サービスを利用する方法です。
コードの知識がなくても設定できます。

**代表的なサービス:**

| サービス | 無料プラン | 特徴 |
|---|---|---|
| [SnapWidget](https://snapwidget.com/) | あり（ロゴ表示） | シンプルで設定が簡単 |
| [Elfsight](https://elfsight.com/) | あり（ロゴ表示） | デザインカスタマイズ豊富 |
| [LightWidget](https://lightwidget.com/) | あり（ロゴ表示） | 軽量・高速 |

> 無料プランではサービスのロゴが表示される。ロゴを非表示にするには有料プラン（月額 $5〜$10 程度）が必要。

**SnapWidget を使う場合の手順:**

1. [SnapWidget](https://snapwidget.com/) でアカウントを作成
2. 「Create Widget」→「Instagram」→「Photo Grid」を選択
3. `@torabe_freeschool` を連携
4. 表示設定を調整（列数：2列モバイル / 3列PC、表示枚数：6枚）
5. 「Get Code」で埋め込みコードを取得

**index-v3.html への組み込み方:**

Instagram セクションの `grid grid-cols-2 sm:grid-cols-3 ...` ブロック全体と、フォローボタンの `<div>` を削除し、取得した埋め込みコードに置き換える。

```html
<!-- SnapWidget 埋め込みコード（サービスから取得したものをここに貼る） -->
<iframe src="https://snapwidget.com/embed/XXXXXXX"
        class="w-full mb-10"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
        style="border:none; overflow:hidden; min-height:400px;">
</iframe>
```

---

### 方法C：Instagram Graph API を使う（自動・上級者向け）

Meta の公式APIを使って投稿データを取得し、自前でHTMLに組み込む方法です。
完全なカスタマイズが可能ですが、バックエンドサーバーが必要です。
静的HTMLのみの運用環境（GitHub Pages など）には不向きです。

**前提条件:**
- Meta（Facebook）Businessアカウント
- Instagram をビジネス/クリエイターアカウントに切り替え済み
- Facebookページと Instagram アカウントの連携
- Node.js / PHP などのサーバーサイド実行環境

> ※ 旧 Basic Display API は2024年12月に廃止。現在は **Graph API** のみ対応。

**大まかな手順:**

1. **Meta Developers でアプリを作成**
   `https://developers.facebook.com/` →「マイアプリ」→「アプリを作成」

2. **Instagram Graph API を有効化**
   アプリ設定 → 製品を追加 → Instagram Graph API

3. **アクセストークンを取得**
   Graph API Explorer でロングタームトークン（有効期限60日）を発行。
   期限切れを防ぐためにトークン自動更新の仕組みも実装が必要。

4. **投稿一覧を取得するAPI:**

   ```
   GET https://graph.instagram.com/me/media
     ?fields=id,media_type,media_url,permalink,thumbnail_url
     &limit=6
     &access_token={ACCESS_TOKEN}
   ```

5. **取得した画像URLを `<img src="">` に動的に埋め込む（JavaScript例）:**

   ```javascript
   const res = await fetch('/api/instagram'); // サーバー経由でトークンを隠す
   const data = await res.json();
   const container = document.getElementById('instagram-grid');
   data.data.slice(0, 6).forEach(post => {
       container.innerHTML += `
           <a href="${post.permalink}" target="_blank" rel="noopener noreferrer"
              class="block aspect-square rounded-xl overflow-hidden group cursor-pointer">
               <img src="${post.media_url}"
                    alt="とらすとベース フリースクール"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy">
           </a>`;
   });
   ```

   > アクセストークンはセキュリティのため直接HTMLに書かず、必ずサーバー経由で取得する。

---

## 実装後の確認チェックリスト

- [ ] 6枚の画像がすべて正しく表示されている
- [ ] モバイル（375px）で2列×3行に表示されている
- [ ] デスクトップで3列×2行に表示されている
- [ ] 各カードをタップ/クリックすると Instagram が開く
- [ ] 画像の読み込みが遅くないこと（方法Aは各200KB以下）
- [ ] 顔が写っている写真の使用許諾を確認済み

---

*作成日: 2026-03-27*
