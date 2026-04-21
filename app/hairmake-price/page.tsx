export default function HairmakePricePage() {
  const menus = [
    {
      category: "ヘアメイク",
      items: [
        { name: "ヘアセット", price: "¥3300" },
        { name: "盛り髪", price: "+¥550" },
        { name: "和髪", price: "¥4400" },
        { name: "フルメイク", price: "¥4400" },
        { name: "ポイントメイク", price: "¥3300" },
        { name: "つけまつげ装着", price: "¥550〜" },
      ],
    },
    {
      category: "着付け",
      items: [
        { name: "浴衣", price: "¥3300" },
        { name: "袴", price: "¥7700" },
        { name: "訪問着", price: "¥7700" },
        { name: "留袖", price: "¥8800" },
        { name: "振袖", price: "¥9900" },
      ],
    },
    {
      category: "ブライダル",
      items: [
        { name: "ブライダルヘアメイク(リハなし)", price: "¥13200" },
        { name: "ブライダルヘアメイク(リハ込み)", price: "¥22000" },
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">
        Hairmake
      </p>
      <h1 className="text-2xl font-medium mb-12 tracking-wide">
        ヘアメイクプライス
      </h1>

      <div className="space-y-12">
        {menus.map((section) => (
          <div key={section.category}>
            <h2 className="text-xs tracking-widest text-gray-500 mb-4 pb-2 border-b border-gray-200 uppercase">
              {section.category}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-between items-baseline py-2"
                >
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-medium tabular-nums">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 bg-gray-50 text-sm text-gray-700 leading-relaxed">
        <p>早朝料金1時間につき¥1100</p>
      </div>
    </div>
  );
}
