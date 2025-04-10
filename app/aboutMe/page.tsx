"use client";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

import { title } from "@/components/primitives";
// this is for <a></a>
// this is our website  going to the store
export default function Aboutmepage() {
  let facts: string[] = [
    "Only One Person Can Change The Size Of Their Pupil.",
    // string  item #0
    "Crocodiles Can Gallop Like A Horse",
    // string  item #1
    " Nintendo Is 130 Years Old.",
    // string  item #2
    "dolphins sleep with one eye open",
    " Flamingos aren&apos;t born pink",
    "a chef&apos;s hat has 100 pleats",
    " avocados are a fruit",
    " Australia is wider than the moon",
    " ketchup was once sold as medicine",
    "honey bees recognize faces",
    "koalas have fingerprints",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <article />
      <h1 className={title()}>About Me</h1>
      <br />
      <Button
        className="bg-blue-700 text-white"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press 4 Fact
      </Button>
      <p>{fact}</p>
      <div className="flex flex-wrap text-2xl m-2 border-2 border-black justify-center">
        <p className="m-6 border-2 border-green-900" />
        <article>
          <p className="text-3xl">-DESCRIPTION</p>
          <p>Senior</p>
          <p>
            My favourite things are hanging out with my friends and playing
            video games.
          </p>
          <p>Those information are parts of my life.</p>
        </article>
      </div>
      <div className="flex flex-wrap text-2xl m-2 border-2 border-black justify-center">
        <p className="m-6 border-2 border-green-900">
          <img alt="this is me" height="200" src="me.jpg" width="400" />I enjoy
          painting and traveling.{" "}
        </p>
      </div>
      <div className="flex flex-wrap text-2xl m-2 border-2 border-black justify-center">
        <p className="m-6 border-2 border-green-900">
          <img alt="NY me" height="400" src="time square.jpg" width="400" />I
          really enjoy that travel to New York!!
        </p>
        <p>Time Square</p>
      </div>
      <div className="flex flex-wrap text-2xl m-2 border-2 border-black justify-center">
        <p className="m-6 border-2 border-green-900">
          <img alt="cool me" height="400" src="/cool pic.jpg" width="400" />
          The picture I&apos;m cool
        </p>
      </div>
      <div className="flex flex-wrap text-2xl m-2 border-2 border-black justify-center">
        <p className="m-6 border-2 border-green-900">
          <img alt="food" height="400" src="/food.jpg" width="400" />I really
          enjoy in Teriyaki
        </p>
        <p>Things are important in my lifes</p>
      </div>
      {/* left side; images */}
      <br />
      <Button
        as={link}
        className="bg-green-800 text-emerald-50"
        href="https://issaquah.instructure.com/ "
        target="-bland"
      >
        Home
      </Button>
      {/* this button should take us to home page after we give it a <href> */}
    </div>
  );
}
