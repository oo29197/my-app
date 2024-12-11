"use client";

import Image from "next/image";
import Briefing1 from "/public/briefing1.png";
import Briefing2 from "/public/briefing2.png";
import Death from "/public/death.gif";
import General from "/public/general.gif";
import Soul from "/public/staring_to_soul.gif";
import { ChevronRight } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Face from "/public/face.png";
import { useRouter } from "next/navigation";

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedValue, setSelectedValue] = useState("");
  const [click, setClick] = useState<boolean>(false);
  const [show, setShow] = useState<any>(true);
  const router = useRouter();

  const handleReset = (value: any) => {
    setShow(true);
    setCurrentStep(1);
    setSelectedValue("");
    setClick(false);
  };

  const handleChange = (value: any) => {
    setClick(true);
    setSelectedValue(value);

    if (currentStep === 3) {
      if (value === 4) {
        setShow(true);
      } else {
        setShow(false);
      }
    } else if (currentStep === 4) {
      if (value === 1) {
        setShow(true);
      } else {
        setShow(false);
      }
    } else if (currentStep === 5) {
      if (value === 3) {
        setShow(true);
      } else {
        setShow(false);
      }
    } else if (currentStep === 6) {
      if (value === 2) {
        setShow(true);
      } else {
        setShow(false);
      }
    } else if (currentStep === 7) {
      if (value === 4) {
        setShow(true);
      } else {
        setShow(false);
      }
    } else if (currentStep === 11) {
      if (value === 1) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  };

  const handleEnd = () => {
    router.push("/");
  };

  const handleNext = () => {
    setSelectedValue("");
    setShow(true);
    setClick(false);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <Card className="w-[800px] text-center bg-green-900 border-none rounded-none">
          <CardHeader>
            <CardTitle className="text-green-500">
              {currentStep === 1 && (
                <>
                  "Alright soldiers, let's see whether you were listening to my
                  briefing."
                </>
              )}

              {currentStep === 2 && (
                <>
                  This quiz will test you on your knowledge of not taking drugs.
                </>
              )}

              {currentStep === 3 && (
                <>
                  1. Which of the following is NOT a common risk facter for
                  youth drug abuse in Singapore?
                </>
              )}

              {currentStep === 4 && (
                <>
                  2. What is the most significant factor contributing to youth
                  drug relapse in Singapore?
                </>
              )}

              {currentStep === 5 && (
                <>
                  3. What percentage of youth drug abuse cases in Singapore
                  involve peer influence?
                </>
              )}

              {currentStep === 6 && (
                <>
                  4. Which government agency leads drug prevention efforts among
                  youths in Singapore?
                </>
              )}

              {currentStep === 7 && (
                <>
                  5. What is the maximum penalty for drug trafficking in
                  Singapore?
                </>
              )}

              {currentStep === 8 && <>Now, the last question is...um...</>}

              {currentStep === 9 && <>um...</>}

              {currentStep === 10 && <>Oh, this.</>}

              {currentStep === 11 && <>is drug abuse illegal in Singapore?</>}

              {currentStep === 12 && (
                <>
                  Okay, you are NOT GUILTY. you're free to go continue doing
                  your basic soldier stuff.
                </>
              )}
            </CardTitle>

            {currentStep === 2 && (
              <CardDescription className="text-green-500">
                I've recieved reports that some of you have been sneaking the
                stuff into here... Correctly answer this quiz, and you shall be
                deemed INNOCENT.{" "}
              </CardDescription>
            )}
          </CardHeader>
        </Card>

        <Card className="w-[800px] flex justify-center border-none bg-black p-8 text-cyan-500 rounded-none">
          {currentStep === 1 && (
            <Image
              src={Briefing2}
              width={1000}
              height={1000}
              alt="general.png"
            />
          )}

          {currentStep === 2 && (
            <Image
              src={Briefing1}
              width={1000}
              height={1000}
              alt="general.png"
            />
          )}

          {currentStep === 3 && (
            <div className="flex flex-col gap-12">
              {show && (
                <RadioGroup
                  defaultValue="comfortable"
                  value={selectedValue}
                  onValueChange={handleChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="1" />
                    <Label htmlFor="1" className="text-xl">
                      Family history of substance abuse
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="2" />
                    <Label htmlFor="2" className="text-xl">
                      Academic pressure
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="3" />
                    <Label htmlFor="3" className="text-xl">
                      Genetic predisposition to addiction
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="4" />
                    <Label htmlFor="4" className="text-xl">
                      Social media exposure
                    </Label>
                  </div>
                </RadioGroup>
              )}

              {click && (
                <div className="bg-black min-w-[500px] text-center p-2">
                  {selectedValue === "4" ? (
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <p>[YOU ARE RIGHT]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleNext}
                        >
                          {">"}
                        </Button>{" "}
                        TO PROCEED]
                      </p>

                      {/* insert here */}
                      <Image
                        src={Death}
                        width={1000}
                        height={1000}
                        alt="death.png"
                      />
                    </div>
                  ) : (
                    <>
                      <p>[YOU ARE WRONG]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleReset}
                        >
                          R
                        </Button>{" "}
                        TO RESTART]
                      </p>
                      <Image
                        src={Death}
                        width={1000}
                        height={1000}
                        alt="death.png"
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {currentStep === 4 && (
            <div className="flex flex-col gap-12">
              {show && (
                <RadioGroup
                  defaultValue="comfortable"
                  value={selectedValue}
                  onValueChange={handleChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="1" />
                    <Label htmlFor="1" className="text-xl">
                      Lack of family support
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="2" />
                    <Label htmlFor="2" className="text-xl">
                      Insufficient rehabilitation programs
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="3" />
                    <Label htmlFor="3" className="text-xl">
                      Economic challenges
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="4" />
                    <Label htmlFor="4" className="text-xl">
                      Peer pressure
                    </Label>
                  </div>
                </RadioGroup>
              )}

              {click && (
                <div className="bg-black min-w-[500px] text-center">
                  {selectedValue === "1" ? (
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <p>[YOU ARE RIGHT]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleNext}
                        >
                          {">"}
                        </Button>{" "}
                        TO PROCEED]
                      </p>
                    </div>
                  ) : (
                    <>
                      <p>[YOU ARE WRONG]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleReset}
                        >
                          R
                        </Button>{" "}
                        TO RESTART]
                      </p>
                      <Image
                        src={Death}
                        width={1000}
                        height={1000}
                        alt="death.png"
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {currentStep === 5 && (
            <div className="flex flex-col gap-12">
              {show && (
                <RadioGroup
                  defaultValue="comfortable"
                  value={selectedValue}
                  onValueChange={handleChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="1" />
                    <Label htmlFor="1" className="text-xl">~25%</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="2" />
                    <Label htmlFor="2" className="text-xl">~40%</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="3" />
                    <Label htmlFor="3" className="text-xl">~60%</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="4" />
                    <Label htmlFor="4" className="text-xl">~80%</Label>
                  </div>
                </RadioGroup>
              )}

              {click && (
                <div className="bg-black min-w-[500px] text-center">
                  {selectedValue === "3" ? (
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <p>[YOU ARE RIGHT]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleNext}
                        >
                          {">"}
                        </Button>{" "}
                        TO PROCEED]
                      </p>

                      {/* insert here */}
                      <Image
                        src={Death}
                        width={1000}
                        height={1000}
                        alt="death.png"
                      />
                    </div>
                  ) : (
                    <>
                      <p>[YOU ARE WRONG]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleReset}
                        >
                          R
                        </Button>{" "}
                        TO RESTART]
                      </p>
                      <Image
                        src={Death}
                        width={1000}
                        height={1000}
                        alt="death.png"
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {currentStep === 6 && (
            <div className="flex flex-col gap-12">
              {show && (
                <RadioGroup
                  defaultValue="comfortable"
                  value={selectedValue}
                  onValueChange={handleChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="1" />
                    <Label htmlFor="1" className="text-xl">Singapore Police Force</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="2" />
                    <Label htmlFor="2" className="text-xl">Central Narcotics Bureau (CNB)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="3" />
                    <Label htmlFor="3" className="text-xl">Ministry of Home Affairs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="4" />
                    <Label htmlFor="4" className="text-xl">Ministry of Education</Label>
                  </div>
                </RadioGroup>
              )}

              {click && (
                <div className="bg-black min-w-[500px] text-center">
                  {selectedValue === "2" ? (
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <p>[YOU ARE RIGHT]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleNext}
                        >
                          {">"}
                        </Button>{" "}
                        TO PROCEED]
                      </p>

                      {/* insert here */}
                      <Image
                        src={Death}
                        width={1000}
                        height={1000}
                        alt="death.png"
                      />
                    </div>
                  ) : (
                    <>
                      <p>[YOU ARE WRONG]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleReset}
                        >
                          R
                        </Button>{" "}
                        TO RESTART]
                      </p>
                      <Image
                        src={Death}
                        width={1000}
                        height={1000}
                        alt="death.png"
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {currentStep === 7 && (
            <div className="flex flex-col gap-12">
              {show && (
                <RadioGroup
                  defaultValue="comfortable"
                  value={selectedValue}
                  onValueChange={handleChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="1" />
                    <Label htmlFor="1" className="text-xl">10 years in prison</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="2" />
                    <Label htmlFor="2" className="text-xl">Life imprisonment (CNB)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="3" />
                    <Label htmlFor="3" className="text-xl">Mandatory rehabilitation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="4" />
                    <Label htmlFor="4" className="text-xl">death.</Label>
                  </div>
                </RadioGroup>
              )}

              {click && (
                <div className="bg-black min-w-[500px] text-center">
                  {selectedValue === "4" ? (
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <p>[YOU ARE RIGHT]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleNext}
                        >
                          {">"}
                        </Button>{" "}
                        TO PROCEED]
                      </p>

                      {/* insert here */}
                      <Image
                        src={Death}
                        width={1000}
                        height={1000}
                        alt="death.png"
                      />
                    </div>
                  ) : (
                    <>
                      <p>[YOU ARE WRONG]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleReset}
                        >
                          R
                        </Button>{" "}
                        TO RESTART]
                      </p>
                      <Image
                        src={Death}
                        width={1000}
                        height={1000}
                        alt="death.png"
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {(currentStep === 8 || currentStep === 9) && (
            <>
              {" "}
              <Image src={General} width={500} height={500} alt="general.png" />
            </>
          )}

          {currentStep === 10 && (
            <>
              {" "}
              <Image src={Face} width={500} height={500} alt="face.png" />
            </>
          )}

          {currentStep === 11 && (
            <div className="flex flex-col gap-12">
              {show && (
                <RadioGroup
                  defaultValue="comfortable"
                  value={selectedValue}
                  onValueChange={handleChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="1" />
                    <Label htmlFor="1" className="text-xl">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="2" />
                    <Label htmlFor="2" className="text-xl">No</Label>
                  </div>
                </RadioGroup>
              )}

              {click && (
                <div className="bg-black min-w-[500px] text-center">
                  {selectedValue === "1" ? (
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <p>[YOU ARE RIGHT]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleNext}
                        >
                          {">"}
                        </Button>{" "}
                        TO PROCEED]
                      </p>

                      {/* insert here */}
                      <Image
                        src={Death}
                        width={1000}
                        height={1000}
                        alt="death.png"
                      />
                    </div>
                  ) : (
                    <>
                      <p>[YOU ARE WRONG]</p>
                      <p className="pb-6">
                        [CLICK{" "}
                        <Button
                          variant="lightBlue"
                          size="sm"
                          onClick={handleReset}
                        >
                          R
                        </Button>{" "}
                        TO RESTART]
                      </p>
                      <Image
                        src={Death}
                        width={1000}
                        height={1000}
                        alt="death.png"
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {currentStep === 12 && (
            <Image src={Soul} alt="soul" height={500} width={500} />
          )}
        </Card>
      </div>

      <div className="flex justify-end pr-[235px] pt-4">
        {currentStep === 12 && (
          <Button variant="lightBlue" size="md" onClick={handleEnd}>
            <p>END</p>
          </Button>
        )}

        {(currentStep === 1 ||
          currentStep === 2 ||
          currentStep === 8 ||
          currentStep === 9 ||
          currentStep === 10) && (
          <div
            className="bg-cyan-900 rounded-lg py-2 px-4 cursor-pointer"
            onClick={handleNext}
          >
            <ChevronRight size={32} color="cyan" />
          </div>
        )}
      </div>
    </>
  );
}
