import Card, { CardContent, CardHead, CardSub } from "@/components/card";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";

let geistFont = GeistSans.className;

export default function Home() {
  return (
    <div>
      <div className="card-container">
        <Card>
          <CardHead>Create project.</CardHead>
          <CardSub>Deploy your new project in one-click.</CardSub>
          <CardContent justify={false}>
            <p className={geistFont}>Email</p>
            <p>Name2</p>
          </CardContent>
        </Card>
        <Card>
          <h1 className={geistFont + " bold card-head"}>Card Title</h1>
        </Card>
      </div>
    </div>
  );
}
