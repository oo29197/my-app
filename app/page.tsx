import Image from "next/image";
import General from "/public/general.gif";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Card className="w-[800px] text-center border-none bg-green-900 rounded-none">
        <CardHeader>
          <CardTitle className="text-green-500">Feeling stressed?</CardTitle>
          <CardDescription className="text-green-500">
            In that case, I would never recommend the use of drugs.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="w-[800px] flex justify-center border-none bg-green-900 rounded-none">
        <Image src={General} width={500} height={500} alt="general.png" />
      </Card>

      <Card className="w-[800px] text-center border-none bg-green-900 rounded-none">
        <CardHeader>
          <CardDescription className="text-green-500">
            "NO SUBSTANCE ABUSE IN MY BASE!"
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="pt-6">
        <Link href="/quiz" legacyBehavior passHref>
          <Button variant="lightBlue" size="lg">
            Attend Briefing
          </Button>
        </Link>
      </div>
    </div>
  );
}

{
  /* in an unknown year an unknown meteor struck the planet, grabbing the
            attention of several scientists, who travelled to the impact site,
            returning with several samples which they brought back to the lab,
            where they found it capable of mutating living beings, such as the
            rats they used, and even plants, despite the need for a wound in the
            plant for mutation to take place. Little did they know that this
            ability to mutate organisms would eventually bring on the greatest
            disaster in all of the planet's history. Later that day, some of the
            scientists and others who involuntarily came in contact with the
            substance started to experience symptons such as intence headache,
            breathing difficulty, violent coughing and wheezing. Suspecting the
            green substance to be the culprit, they headed back to the impact
            site to find that every living thing around the meteor has been
            twisted into a mindless husk of their former selves, oozing with the
            exact same substance. The scientists were never heard from again. A
            nearby military base who was on radio communications with the
            scientists noticed the communications cut off, and sent a soldier to
            investigate the situation. When the soldier arrived, he met a group
            of some other soldiers in battle formation. Eventually, they find
            the scientists, also twisted into mindless walking beings. They
            opened fire on the now infected scientists, and downed them in a few
            shots. This however, grabbed the attention of the rest of the
            infected creatures, and soon they had a large horde of disgusting,
            green-stained beasts rushing toward them. The team fired at the
            endless swarm of beings, but they just kept coming. It seemed that
            the infection had spread further than they thought. Each of them was
            downed one by one, merged into the thousands of affected organisms,
            except for one, who fled from the impact site before recieving a
            message from the general at base, informing him that almost all of
            the organisms on the planet have been infected, including the
            elemental celestials who ruled the civilisations of their allies,
            such as the Seawater and Moonrock civilisations. He then is told to
            escape through the forest to a nearby cave to seek shelter. He
            rushes past the infected forest animals and unlucky humans who found
            themselves in the wrong place at the wrong time. Eventually, the
            soldier reaches the entrance to the cave, but it is blocked by a
            strange organic mass, consisting of the same substance in the meteor
            and infected organisms, with the body parts of several infected
            humans floating in a transparent dome in the centre of it surrounded
            by roots. He eventually blows this dome up by loading lead into
            identified weakpoints, exposing a core that once destroyed, brings
            an end to the mass and opens up the entrance to the cave. The
            soldier then rushes into the cave. not before realising that the
            disease was also able to get underground and that there was no
            turning back as the mutated beings have also clustered around the
            entrance. Advancing through the cave, he encounters new threats.
            Infecting the resident cave creatures and forming small masses of
            the disease in the walls, the soldier has to face not just the
            mutated creatures, but also random growths of the substance that
            burst out of the walls. He eventually reaches the other end of the
            cave, but not before encountering an ancient stone golem that has
            been infected by the green substance. The golem uses his built-in
            sword and shield to attack and defend itself from the soldier's
            attacks, alongside some new abilities abtained after infection, such
            as the ability to shoot projectiles made of the same substance from
            orifices on the mass of infectious substance that flank its body.
            Eventually, the soldier is able to bust its shield and take out the
            infected core of the golem, destroying it. He then leaves the cave
            into a desert. The general at the base, now on lockdown, informs the
            soldier of an abandoned laboratory on the other side of the desert.
            The soldier crosses the desert. facing some of the infected desert
            sandworms on the way, before he reaches the entrance to the lab,
            where he is ambushed by an infected centipede of gargantuan
            proportions. Launching bullets into its mouth, the soldier is able
            to take out the centipede and progress into the laboratory. He then
            walks through the door of the laboratory, advised to tread carefully
            as the previous workers there had left in a hurry. Venturing deeper
            into the laboratory, he finds a functioning elevator, which he uses
            to head to the basement, where he is met with more zombies and no
            easy way back to the surface as the elevator broke down. Left with
            no other choice, he hacks, slashes and blasts */
}
