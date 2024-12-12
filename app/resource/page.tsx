"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-12">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-neutral-200">
        Keeping Singapore Drug-Free 🇸🇬
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

interface iDummyContent {
  title: string,
  description: string
}

const DummyContent = ({ title, description }: iDummyContent) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
             {title}
              </span>{" "}
         {description}
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "",
    title: "Singapore's Stance on Drugs",
    src: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent title="Strong Support for Singapore’s Anti-Drug Policies" description="A 2018 survey was conducted on Singapore’s Anti-Drug policies and it was found that there was a strong support for Singapore’s anti-drug policies and tough stance against drugs. In addition, the public supports the mandatory rehabilitation of drug abusers and not legalising cannabis." />,
  },
  {
    category: "",
    title: "Impact of Drugs on Society",
    src: "https://plus.unsplash.com/premium_photo-1683121172414-235bd5997eed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhbmdpJTIwcHJpc29ufGVufDB8fDB8fHww",
    content: <DummyContent title="Drug Abuse is Harmful and Imposes Significant Burden to Society" description="Drug abuse exacts a heavy price on abusers, their families and society. The cost of drug-involved crime and drug-attributable crime has increased over the years. As a result, livelihoods are lost, relationships are destroyed, and the wider community suffers at the expense of drugs." />,
  },
  {
    category: "",
    title: "Harms of Cannabis",
    src: "https://images.unsplash.com/photo-1733889886752-f4599c954608?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent title="Cannabis is Addictive and Harmful" description="There are many short- and long-term impacts associated with cannabis. Evidence has shown that cannabis is harmful, addictive and can destroy lives, families and communities. Singapore’s drug control policies are underpinned by evidence and research. To date, there has been no scientific evidence on safety and efficacy of raw cannabis for medical purposes."/>,
  },
  {
    category: "",
    title: "Misuse of Drugs Act",
    src: "https://plus.unsplash.com/premium_photo-1723629658464-90cf72a29e54?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent title="The Misuse of Drugs Act" description="is the main legislation for drug offences. It provides for the enforcement powers of CNB and the penalties for various drug offences, including trafficking, manufacturing, importation or exportation, possession and consumption of controlled drugs. The Misuse of Drugs (Amendment) Act was passed by Parliament on 15 January 2019 to enhance the anti-drug framework and enforcement powers as well as strengthen the drug rehabilitation regime."/>,
  },
];
