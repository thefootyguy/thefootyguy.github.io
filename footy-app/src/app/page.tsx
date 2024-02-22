"use client";

import Accordion, { AccordionContent } from "@/components/accordion";
import Button, { componentSize } from "@/components/button";
import Card, { CardContent, CardHead, CardSub } from "@/components/card";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";

let geistFont = GeistSans.className;

export default function Home() {
  return (
    <div>
      <Accordion contentID="gg">Hello</Accordion>
      <AccordionContent contentID="gg">Mayne</AccordionContent>
      <p>gg32</p>
    </div>

    // <div>
    //   <div className="">
    //     <div className=" card-container-double">
    //       <Card size={componentSize.Fill} extra="left-card">
    //         <CardHead>Create project.</CardHead>
    //         <CardSub>Deploy your new project in one-click.</CardSub>
    //         <CardContent>
    //           <p>Email</p>
    //           <Button extraClass="float-right" onClick={function () {}} href="">
    //             Confirm
    //           </Button>
    //         </CardContent>
    //       </Card>
    //       <Card size={componentSize.Fill} extra="">
    //         <CardHead>23</CardHead>
    //       </Card>
    //     </div>
    //   </div>
    // </div>

    // <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
    //   <div className="relative h-24">
    //     <div className="gray absolute inset-0"></div>
    //   </div>
    // </div>
  );
}
