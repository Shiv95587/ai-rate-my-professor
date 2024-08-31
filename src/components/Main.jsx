import { useState } from "react";
import { Tooltip } from "@mui/material";
import { data } from "../data/data.js";

export default function Main() {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const headerText = "How can I assist with your professor search?";

  function handleSubmit(e) {
    e.preventDefault();
    setHistory((history) => [...history, { role: "user", msg: query }]);
    setQuery("");
    // setTimeout((),[3000]);
  }
  return (
    <main
      className={`flex flex-col relative  ${
        history.length === 0 ? "items-center" : ""
      } h-screen`}
    >
      <header
        className={`h-full w-full flex flex-col ${
          data.length === 0 ? "justify-center" : "mt-16 mb-16"
        } overflow-auto`}
      >
        {data.length === 0 ? (
          <h1 className="text-4xl bg-header-linear-gradient bg-clip-text text-transparent font-bold py-8 tracking-wider text-center px-4">
            {headerText}
          </h1>
        ) : (
          <div className="flex flex-col gap-4 px-8">
            {" "}
            {data.map((message, index) => (
              <div
                className={`  font-medium px-4 py-2 rounded-3xl max-w-[450px] tracking-wide ${
                  message.role === "user"
                    ? "sm:ml-auto ml-12 bg-header-linear-gradient shadow-md text-slate-100"
                    : "sm:mr-auto mr-12S bg-white border text-gray-950"
                }`}
                key={index}
              >
                {/* {message.msg} */} Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sed cupiditate soluta laudantium. Excepturi
                repudiandae dignissimos similique eum cupiditate amet minus
                adipisci eius aspernatur fuga aperiam, molestias repellat ipsa
                explicabo harum? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aperiam minima consequuntur nihil dolorem
                totam animi sapiente, tenetur placeat minus maxime laboriosam
                perspiciatis aspernatur, dolores magni quod sed hic? Quibusdam,
                necessitatibus.
              </div>
            ))}
          </div>
        )}
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-row justify-center absolute bottom-5 left-1/2 -translate-x-1/2"
        >
          <input
            type="text"
            placeholder="Ask Me"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border pr-4 py-2 pl-4 w-[300px] text-base rounded-full focus:outline-none text-gray-950 shadow-md shadow-gray-200 sm:w-[450px] md:w-[600px] relative"
          />
          <Tooltip title={"Send"}>
            <button
              type="submit"
              className="text-xl text-white font-black- px-4 py-[2px] rounded-full bg-header-linear-gradient absolute right-2 top-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-300"
            >
              <span>&uarr;</span>
            </button>
          </Tooltip>
        </form>
      </header>
    </main>
  );
}
