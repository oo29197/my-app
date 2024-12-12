"use client";

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import General from "/public/general.gif";

export function ThreeDCardDemo() {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/quiz");
  };

  return (
    <CardContainer className="w-full max-w-5xl mx-auto">
      <CardBody className="flex flex-col justify-center bg-green-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[50rem] h-auto rounded-xl p-6 border  ">
        <Card className="text-center flex justify-center border-none shadow-none bg-green-900 rounded-none">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            <CardHeader>
              <CardTitle className="text-green-500">
                Feeling stressed?
              </CardTitle>
              <CardDescription className="text-green-500">
                In that case, I would never recommend the use of drugs.
              </CardDescription>
            </CardHeader>
          </CardItem>
        </Card>

        <div className="flex justify-center">
          <Image src={General} width={500} height={500} alt="general.png" />
        </div>

        <Card className="text-center flex justify-center border-none shadow-none bg-green-900 rounded-none">
          <CardItem translateZ="50">
            <CardHeader>
              <CardDescription className="text-green-500">
                "NO SUBSTANCE ABUSE IN MY BASE!"
              </CardDescription>
            </CardHeader>
          </CardItem>
        </Card>

        <div className="flex justify-center items-center" onClick={handleRoute}>
          <CardItem
            translateZ="50"
            as="button"
            className="px-4 py-2 rounded-xl bg-cyan-900 text-cyan-400 text-md  p-4 font-bold"
          >
            Attend Briefing
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
