import { ThreeDCardDemo } from "@/components/3dcard/3dcard";
import { InfiniteMovingCardsDemo } from "@/components/movingcards";
import { CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <ThreeDCardDemo />
      <CardTitle className="text-green-400 bg-gradient-to-b from-gray-800 to-gray-700 py-4 px-12 rounded-lg text-3xl shadow-2xl">
        Did you know? 🧐
      </CardTitle>
      <InfiniteMovingCardsDemo />
    </div>
  );
}
