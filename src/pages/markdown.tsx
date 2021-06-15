import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useState } from "react";
import { SwitchHorizontalIcon, SwitchVerticalIcon } from "@heroicons/react/solid";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

// import debounce from "lodash.debounce";

function Markdown() {
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(true);

  // const debouncedSetText = useRef(debounce((value) => setText(value), 1000)).current;

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={tomorrow}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  return (
    <div className="h-screen flex flex-col md:flex-row relative">
      <textarea
        className={`h-1/2 md:h-screen ${!toggle ? "w-0 h-0 p-0" : "w-full"} bg-gray-200 p-2`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className={` h-1/2 md:h-screen w-full p-2 overflow-y-scroll overflow-x-scroll`}>
        <ReactMarkdown
          remarkPlugins={[gfm]}
          children={text}
          // @ts-ignore
          components={components}
          className="prose prose-indigo md:prose-lg lg:prose-xl"
        />
      </div>
      <div className="absolute bottom-2 left-2 cursor-pointer" onClick={() => setToggle(!toggle)}>
        <SwitchHorizontalIcon className="hidden md:block h-10 md:h-15"></SwitchHorizontalIcon>
        <SwitchVerticalIcon className="md:hidden h-10 h-15"></SwitchVerticalIcon>
      </div>
    </div>
  );
}

export default Markdown;
