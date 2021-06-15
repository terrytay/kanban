import Head from "next/head";
import Nav from "../components/Nav";
import Markdown from "./markdown";

function Home() {
  return (
    <div className="h-screen flex">
      <Nav />

      <div className="flex-grow min-w-0 bg-white">
        <Markdown />
      </div>
    </div>
  );
}

export default Home;
