"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, Bike, Book, Ban } from "lucide-react";
import Image from "next/image";

export default function FunAboutMeGallery() {
  const funFacts = [
    {
      icon: <Coffee className="w-4 h-4 mr-2" />,
      text: "I get hungry when bored",
    },
    {
      icon: <Ban className="w-4 h-4 mr-2" />,
      text: "I had no cca in primary school",
    },
    { icon: <Bike className="w-4 h-4 mr-2" />, text: "I can ride a bicycle" },
    {
      icon: <Book className="w-4 h-4 mr-2" />,
      text: "I walk around when excited",
    },
    { icon: <Ban className="w-4 h-4 mr-2" />, text: "I suck at math" },
  ];

  const galleryImages = [
    {
      src: "/baseinterior.png?height=300&width=300",
      alt: "Coding setup",
      title: "the base",
    },
    {
      src: "/exterior.png?height=300&width=300",
      alt: "Coding setup",
      title: "the base but outside",
    },
    {
      src: "/briefing1.png?height=300&width=300",
      alt: "Coding setup",
      title: "briefing",
    },
    {
      src: "/briefing2.png?height=300&width=300",
      alt: "Coding setup",
      title: "briefing still",
    },
    {
      src: "/briefing3.png?height=300&width=300",
      alt: "Coding setup",
      title: "still briefing",
    },
    {
      src: "/face.png?height=300&width=300",
      alt: "Coding setup",
      title: "he stares into your soul",
    },
    {
      src: "/general.gif?height=300&width=300",
      alt: "Coding setup",
      title: "the same guy as before",
    },
    {
      src: "/staring_to_soul.gif?height=300&width=300",
      alt: "Coding setup",
      title: "they also stare into each others' souls",
    },
    {
      src: "/death.gif?height=300&width=300",
      alt: "Coding setup",
      title: "soldier guy hit the ground too hard",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage
            src="/profilepicture.png?height=128&width=128"
            alt="Jane Doe"
          />
          <AvatarFallback className="bg-green-500 text-white">X</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold mb-2 text-white">Xavier</h1>
      </motion.header>

      <main className="max-w-4xl mx-auto">
        <Tabs defaultValue="about" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="skills">Hobbies</TabsTrigger>
            <TabsTrigger value="funfacts">Fun Facts</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>"Normal Person"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  A teenager that is relatively new to coding, who sings in my
                  school's choir. I first really started coding in Roblox
                  Studio.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Cycling", "Gaming", "Coding"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Badge variant="secondary" className="text-lg py-2 px-4">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="funfacts">
            <Card>
              <CardHeader>
                <CardTitle>Totally True Facts About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {funFacts.map((fact, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center text-lg"
                    >
                      {fact.icon}
                      {fact.text}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>hints of the content</CardTitle>
              <CardDescription>
               Some images you will see on this website...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={300}
                      className="rounded-lg object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <div className="text-white text-center">
                        <p className="mt-2 font-semibold">{image.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  );
}

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import Image from "next/image"
// import newjeans from "@/app/assests/newjeans.png"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { Terminal } from "lucide-react"

// export default function AboutMe() {
//     return(
//         <div className="p-5">
//             Hello mentee
//             <Card>
//                 <CardHeader>
//                     <CardTitle>
//                         Hello I'm Joshua
//                     </CardTitle>
//                     <CardDescription>
//                         I like to code and climb
//                     </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                     <Image alt="hello" src={newjeans}/>
//                 </CardContent>
//             </Card>
//             <Card>
//                 <CardHeader>
//                     <CardContent>
//                         Major:
//                     </CardContent>
//                     <CardDescription>
//                         Information Systems
//                     </CardDescription>
//                 </CardHeader>
//             </Card>
//             <Alert>
//                 <Terminal className="h-4 w-4"/>
//                 <AlertTitle>Heads up</AlertTitle>
//                 <AlertDescription>I have added an alert</AlertDescription>
//             </Alert>
//         </div>
//     );
//   }

// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export default function Author() {
//   return (
//     <div className="flex flex-col justify-center items-center gap-10">
//       <Card className="w-[800px] text-center bg-green-900 border-none rounded-none">
//         <CardHeader>
//           <CardTitle className="text-green-500">About the Author</CardTitle>
//           <CardDescription></CardDescription>
//         </CardHeader>
//       </Card>

//       <Card className="w-[800px] text-center bg-cyan-950 border-none rounded-none">
//         <CardHeader>
//           <CardTitle className="text-cyan-400">I am Xavier.</CardTitle>
//           <CardDescription className="text-cyan-400">
// A teenager that is relatively new to coding, who sings in my
// school's choir. I first really started coding in Roblox Studio.
//           </CardDescription>
//         </CardHeader>
//       </Card>
//     </div>
//   );
// }
