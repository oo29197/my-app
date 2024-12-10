import Image from "next/image";
import Image2 from "/public/briefing2.png"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Quiz() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Card className="w-[800px] text-center bg-green-900 border-none rounded-none">
        <CardHeader>
          <CardTitle className="text-green-500">
            "Alright soldiers, Let's see whether you were listening to my
            briefing."
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
      </Card>

      <Card className="w-[800px] flex justify-center border-none bg-green-900 rounded-none">
        <Image src={Image2} width={1000} height={1000} alt="general.png" />
      </Card>
    </div>
  );
}
