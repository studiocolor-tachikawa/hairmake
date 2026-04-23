export default function CompanyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">
        About
      </p>
      <h1 className="text-2xl font-medium mb-12 tracking-wide">Company</h1>

      <table className="w-full text-sm">
        <tbody className="divide-y divide-gray-100">
          {[
            { label: "サロン名", value: "Studio Color（スタジオカラー）" },
            {
              label: "Address",
              value: "東京都立川市錦町2-1-26 Nビルディング401",
            },
            { label: "TEL", value: "042-595-8124" },
            { label: "OPEN", value: "10:00-22:00" },
            { label: "定休日", value: "年末年始" },
          ].map(({ label, value }) => (
            <tr key={label}>
              <th className="py-4 pr-6 text-left text-xs tracking-wider text-gray-400 font-normal w-32 align-top">
                {label}
              </th>
              <td className="py-4 text-gray-700">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
