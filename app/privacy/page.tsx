export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase text-center">Privacy Policy</p>
      <h1 className="text-2xl font-medium mb-12 tracking-wide text-center">プライバシーポリシー</h1>

      <div className="space-y-10 text-sm text-gray-700 leading-loose">
        <section>
          <h2 className="text-base font-medium mb-3">1. 個人情報の取得について</h2>
          <p>
            Studio Color（以下「当サロン」）は、お客様からご予約・お問い合わせ等を通じて、お名前、電話番号、メールアドレス等の個人情報を取得する場合があります。個人情報の取得にあたっては、適法かつ公正な手段によって行います。
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium mb-3">2. 個人情報の利用目的</h2>
          <p>取得した個人情報は、以下の目的で利用いたします。</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>ご予約の確認・変更・キャンセルのご連絡</li>
            <li>お問い合わせへの回答</li>
            <li>サービス向上のためのアンケート・ご案内の送付</li>
            <li>当サロンからのお知らせ・キャンペーン情報のご案内</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-medium mb-3">3. 個人情報の第三者提供</h2>
          <p>
            当サロンは、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium mb-3">4. 個人情報の管理</h2>
          <p>
            当サロンは、個人情報の漏洩・滅失・き損の防止のため、適切な安全管理措置を講じます。
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium mb-3">5. Cookie（クッキー）について</h2>
          <p>
            当サイトでは、利便性向上やアクセス解析のために Cookie を使用する場合があります。Cookie
            の使用を希望されない場合は、ブラウザの設定により無効にすることが可能です。
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium mb-3">6. アクセス解析ツールについて</h2>
          <p>
            当サイトでは、Google アナリティクス等のアクセス解析ツールを使用する場合があります。これらのツールはデータ収集のために
            Cookie を使用しています。収集されるデータは匿名であり、個人を特定するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium mb-3">7. プライバシーポリシーの変更</h2>
          <p>
            当サロンは、必要に応じて本ポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium mb-3">8. お問い合わせ</h2>
          <p>個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。</p>
          <div className="mt-3 bg-gray-50 p-4 text-xs text-gray-600 leading-relaxed">
            <p>Studio Color（スタジオカラー）</p>
            <p>所在地：東京都立川市錦町2-1-26 Nビルディング401</p>
            <p>TEL：042-595-8087</p>
          </div>
        </section>
      </div>
    </div>
  );
}
