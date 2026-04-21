"use client";

import { useState } from "react";

export default function ReservationButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fixed button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 bg-black text-white rounded-full px-6 py-3 text-sm tracking-widest shadow-lg hover:bg-gray-800 transition-colors"
      >
        予約する
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-white rounded-t-2xl sm:rounded-2xl w-full sm:w-80 p-8 text-center">
            <h2 className="text-sm tracking-widest mb-6 font-medium">
              予約方法を選んでください
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="https://lin.ee/RbeH8JC"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#06C755] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                LINEで予約
              </a>
              <a
                href="https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000411289"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#E2001B] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                ホットペッパーで予約
              </a>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </>
  );
}
