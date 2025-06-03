import axios from "axios";
import Button from "./Button";
import Card from "./Card";
import { brands, details, fully } from "../images/img";
import { useEffect, useState } from "react";
import shortenUrl from "../shortUrlHandler";

function InputSection({ addShortLink }) {
  const [longUrl, setLongUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  useEffect(() => {
    if (longUrl) setErrorMessage(false);
  }, [longUrl]);
  async function onclick() {
    if (!longUrl) {
      setErrorMessage(true);
      return;
    }
    const response = await shortenUrl(longUrl);
    if (!response) return alert("Error shortening URL, please try again.");
    addShortLink(longUrl, response);
    setLongUrl("");
  }
  return (
    <div
      className={`h-24 w-4/5 bg-Dark-Violet ml-[10%] rounded-md mb-10
            bg-[url('images/bg-shorten-desktop.svg')] max-[1000px]:bg-[url('bg-shorten-mobile.svg')] 
            flex max-[800px]:flex-col max-[800px]:py-3 justify-center items-center absolute -translate-y-1/2 top-0`}
    >
      <div
        className={`rounded-md  w-4/5 relative max-[800px]:mb-4 
       text-Gray ${errorMessage && "border-2 border-Red"}`}
      >
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value.trimStart())}
          className={`bg-white px-2 w-full py-1 rounded-md placeholder:text-sm outline-none ${
            errorMessage && "placeholder:text-Red"
          }`}
        />
        {errorMessage && (
          <p className="italic absolute text-sm text-Red">Please add a link</p>
        )}
      </div>
      <Button
        className={
          "min-[800px]:ml-2 max-[800px]:mt-2 max-[800px]:w-4/5 text-center"
        }
        onClick={onclick}
        variant="raduis"
      >
        Shorten It!
      </Button>
    </div>
  );
}

function ShortLinkCard({ longUrl, shortUrl }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      navigator.clipboard.writeText(shortUrl);
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset copied state after 2 seconds
    }
  }, [copied, shortUrl]);
  return (
    <div className="w-full h-10 flex items-center max-[800px]:flex-col max-[800px]:items-start max-[800px]:w-full max-[800px]:h-max">
      <p>{longUrl}</p>
      <hr className="border-Gray border w-full hidden max-[800px]:block mt-2" />
      <p className="ml-auto mr-5 text-Cyan max-[800px]:ml-0 max-[800px]:my-2">
        {shortUrl}
      </p>
      {copied ? (
        <button className="bg-Dark-Violet text-white max-[800px]:w-full max-[800px]:mx-auto rounded-md px-3 py-1 cursor-pointer ">
          Copied!
        </button>
      ) : (
        <button
          className="bg-Cyan rounded-md font-semibold text-white max-[800px]:w-full max-[800px]:mx-auto px-3 py-1 cursor-pointer"
          onClick={() => setCopied(true)}
        >
          Copy
        </button>
      )}
    </div>
  );
}

function ShortItSection() {
  const [shortsLinsk, setShortLink] = useState([]);
  function addShortLink(longUrl, shortUrl) {
    setShortLink((prev) => {
      if (!prev) return [{ long: longUrl, short: shortUrl }];
      return [...prev, { long: longUrl, short: shortUrl }];
    });
  }
  return (
    <section className="relative h-[90vh] max-[1050px]:h-max bg-Gray/20 py-14">
      <InputSection addShortLink={addShortLink} />

      {/* container */}
      {shortsLinsk.length > 0 && (
        <div className="bg-white rounded-md w-[80%] mx-auto p-3 max-[1050px]:w-[90%] flex flex-wrap justify-between items-center gap-5">
          {shortsLinsk.map((ele) => (
            <ShortLinkCard longUrl={ele.long} shortUrl={ele.short} />
          ))}
        </div>
      )}
      {/* title and description */}
      <h1 className="text-center text-3xl font-bold my-5">
        Advanced Statistics
      </h1>
      <p className="mx-auto text-center w-[400px] max-[1050px]:w-[90%] text-Grayish-Violet font-semibold">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      {/* cards */}
      <div
        className="relative h-max px-[10%] mt-12 
            max-[1050px]:flex-col max-[1050px]:items-center
            flex justify-between"
      >
        {/* line */}
        <div className="max-[1050px]:block hidden w-2 h-full rounded-full absolute left-1/2 -translate-x-1/2 bg-Cyan" />
        <div className="max-[1050px]:hidden w-[79%] h-2 mx-[10%] rounded-full absolute top-1/2 -translate-y-1/2 bg-Cyan left-0" />
        <Card
          icon={brands}
          title={"Brand recognition"}
          description={`Boost your brand recognition with each click. Generic links don't mean a
                thing. Branded links help instil confidence in you content`}
        />
        <Card
          icon={details}
          title={"Detailed Records"}
          description={`Gain insights into who is clicking 
                your links. Knowing when and where people engage with your content helps inform better decisions.`}
          className={"mx-2 mt-5 max-[1050px]:my-16"}
        />

        <Card
          icon={fully}
          title={"Fully Customizable"}
          description={`Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`}
          className={"mx-2 mt-10 max-[1050px]:m-0"}
        />
      </div>
    </section>
  );
}

export default ShortItSection;
