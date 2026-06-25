"use client";

import { useState } from "react";

const donationAmounts = ["£10", "£25", "£50", "£100"] as const;

export function DonationAmountSelector() {
  const [selectedAmount, setSelectedAmount] =
    useState<(typeof donationAmounts)[number]>("£25");

  return (
    <div className="flex w-full flex-col gap-6">
      <div
        role="radiogroup"
        aria-label="Choose donation amount"
        className="grid grid-cols-2 gap-3"
      >
        {donationAmounts.map((amount) => {
          const isSelected = selectedAmount === amount;

          return (
            <button
              key={amount}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => setSelectedAmount(amount)}
              className={`btn-interactive rounded-xl px-4 py-5 text-center text-2xl font-semibold leading-[22px] tracking-[-0.02em] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#446169] ${
                isSelected
                  ? "bg-[#efeadf] text-[#17171c]"
                  : "bg-white text-[#17171c] hover:bg-[#f5f5f5]"
              }`}
            >
              {amount}
            </button>
          );
        })}
      </div>
      <a
        href="#donation-options"
        className="btn-interactive inline-flex w-full items-center justify-center rounded-full border border-white px-5 py-5 text-base font-semibold leading-[22px] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#446169]"
      >
        Donate Now
      </a>
    </div>
  );
}
