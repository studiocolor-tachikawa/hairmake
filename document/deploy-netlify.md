# Netlify デプロイ手順

## 全体の流れ

```
コード変更
    ↓ git push（GitHub にプッシュ）
GitHub リポジトリ
    ↓ Netlify が自動ビルド＆デプロイ
公開URL（https://your-site.netlify.app）
```

---

## 事前準備（初回のみ）

### 1. Netlify アカウント作成

https://app.netlify.com/ で GitHub アカウントと連携してサインアップ。

### 2. サイトの作成

1. Netlify ダッシュボードで「Add new site」→「Import an existing project」
2. GitHub を選択し、このリポジトリを選ぶ
3. ビルド設定は `netlify.toml` から自動で読み込まれる（変更不要）
4. 「Deploy site」をクリック

### 3. 環境変数の設定

Netlify ダッシュボード → Site settings → Environment variables で以下を設定：

**microCMS 関連（必須）:**

| 変数名 | 説明 |
|--------|------|
| `MICROCMS_SERVICE_DOMAIN` | microCMS サービスドメイン（例: `studiocolor-design`） |
| `MICROCMS_API_KEY` | microCMS API キー |

---

## デプロイ方法

### 自動デプロイ（推奨）

GitHub の `main` ブランチにプッシュすると Netlify が自動でビルド＆デプロイする。

```bash
git add .
git commit -m "変更内容"
git push origin main
```

### 手動デプロイ（Netlify CLI）

```bash
# Netlify CLI のインストール（初回のみ）
npm install -g netlify-cli

# ログイン（初回のみ）
netlify login

# サイトとリンク（初回のみ）
netlify link

# ビルド＆デプロイ
netlify deploy --build --prod
```

---

## ISR（Incremental Static Regeneration）

`@netlify/plugin-nextjs` により、Next.js の ISR が自動でサポートされる。

ページで `revalidate` を設定するだけで ISR が有効になる：

```typescript
// ページ単位で設定
export const revalidate = 60; // 60秒ごとに再生成

// fetch 単位で設定
const data = await fetch(url, {
  next: { revalidate: 60 },
});
```

---

## トラブルシューティング

| 症状 | 原因 | 対処 |
|------|------|------|
| ビルド失敗 | 環境変数未設定 | Netlify ダッシュボードで環境変数を確認 |
| 画像が表示されない | `next.config.ts` の `remotePatterns` 不足 | ホスト名を追加 |
| ISR が効かない | `revalidate` 未設定 | ページまたは fetch に `revalidate` を追加 |
| デプロイが古いまま | キャッシュ | Netlify ダッシュボード → Deploys → Clear cache and deploy site |
