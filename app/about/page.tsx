import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Author() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Card className="w-[800px] text-center bg-green-900 border-none rounded-none">
        <CardHeader>
          <CardTitle className="text-green-500">About the Author</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
      </Card>

      <Card className="w-[800px] text-center bg-cyan-950 border-none rounded-none">
        <CardHeader>
          <CardTitle className="text-cyan-400">I am Xavier.</CardTitle>
          <CardDescription className="text-cyan-400">
            A teenager that is relatively new to coding, who sings in my
            school's choir. I first really started coding in Roblox Studio.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
