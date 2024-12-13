import { ThreeDCardDemo } from "@/components/3dcard/3dcard";
import { InfiniteMovingCardsDemo } from "@/components/movingcards";
import { CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <ThreeDCardDemo />
      <CardTitle className="text-white py-4 px-12 rounded-lg text-4xl shadow-none">
        <h1 className="[text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">Did you know? 🧐</h1>
        
      </CardTitle>
      <InfiniteMovingCardsDemo />
    </div>
  );
}
