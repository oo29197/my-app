"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/moving-cards";
InfiniteMovingCards;

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={facts} direction="right" speed="slow" />
    </div>
  );
}

const facts = [
  {
    quote:
      "Drug addiction weakens family structures - addiction issues disrupt normal family life and may lead to family disintegration",
    name: "International Narcotics Control Board, 2013)",
    title: "CNB",
  },
  {
    quote:
      "Drug abuse inflicts immeasurable harm on public health and safety. There are costs which are borne by the rest of society.",
    name: "International Narcotics Control Board, 2013)",
    title: "CNB",
  },
  {
    quote:
      "Drug addiction has a significant economic cost, with billions of dollars spent annually on healthcare, law enforcement, and lost productivity due to addiction-related issues.",
    name: "National Institute on Drug Abuse, 2021",
    title: "NIDA",
  },
  {
    quote:
      "Drug abuse often exacerbates or leads to mental health issues. Individuals with substance use disorders are more likely to experience anxiety, depression, and psychosis.",
    name: "American Psychiatric Association, 2019",
    title: "APA",
  },
  {
    quote:
      "Early exposure to drugs negatively impacts adolescent brain development, leading to long-term cognitive, emotional, and behavioral consequences.",
    name: "National Institute on Drug Abuse, 2020",
    title: "NIDA",
  },
];
