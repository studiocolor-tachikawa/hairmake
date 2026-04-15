export default function AdminBlogPage() {
  return (
    <div>
      <h1 className="text-xl font-medium mb-4">ブログ管理</h1>
      <p className="text-sm text-gray-600 mb-8 leading-relaxed">
        ブログの作成・編集・公開設定は microCMS の管理画面から行ってください。
      </p>
      <a
        href="https://app.microcms.io"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-black text-white text-sm px-6 py-3 hover:bg-gray-800 transition-colors"
      >
        microCMS 管理画面を開く →
      </a>
    </div>
  );
}
