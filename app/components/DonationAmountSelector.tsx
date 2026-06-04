"use client";

import { useState } from "react";

const donationAmounts = ["£10", "£25", "£50", "£100"] as const;

export function DonationAmountSelector() {
  const [selectedAmount, setSelectedAmount] =
    useState<(typeof donationAmounts)[number]>("£25");

  return (
    <div>
      <div
        role="radiogroup"
        aria-label="Choose donation amount"
        className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2"
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
              className={`rounded-2xl border px-4 py-4 text-center text-xl font-bold transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#436169] active:scale-[0.98] ${
                isSelected
                  ? "border-[#E2B39F] bg-[#E2B39F] text-[#1F1F1D]"
                  : "border-[#DDD4CE] bg-white text-[#1F1F1D] hover:border-[#436169] hover:text-[#436169]"
              }`}
            >
              {amount}
            </button>
          );
        })}
      </div>
      <a
        href="#donation-options"
        className="mt-6 block rounded-full bg-[#344C52] px-6 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#2a3d42] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#436169] active:scale-[0.98]"
      >
        Donate Now
      </a>
    </div>
  );
}
