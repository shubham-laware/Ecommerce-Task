import React, { useState } from "react";
import Topic from "./Topic";
import Bot from "./Bot";

function Help() {
  const [searchTopic, setSearchedTopic] = useState("");
  const [chat, setChat] = useState("hidden");
  const [botVisibility,setBotVisbility]=useState(false);

  const topics = [
    {
      imgPath: "/accounts-icon.svg",
      title: "Accounts and Billing",
      description: "Manage your account and billing settings",
    },
    {
      imgPath: "/events-icon.svg",
      title: "Watching Videos and Events",
      description: "Watch all your favourite videos and events",
    },
    {
      imgPath: "/videos-icon.svg",
      title: "Sharing Videos",
      description: "Share videos with the community",
    },
    {
      imgPath: "/virtual-icon.svg",
      title: "Virtual Events",
      description: "Organize virtural events",
    },
    {
      imgPath: "/monitize-icon.svg",
      title: "Monetize Content",
      description: "Earn with your content  ",
    },
    {
      imgPath: "/integration-icon.svg",
      title: "Integration and Third Party",
      description: "Integrate with your favourite tools",
    },
  ];

  const filteredTopics = searchTopic
    ? topics.filter(
        (topic) =>
          topic.title.toLowerCase().includes(searchTopic.toLowerCase()) ||
          topic.description.toLowerCase().includes(searchTopic.toLowerCase())
      )
    : topics;

  const handleChatVisibility = () => {
    setChat(chat === "hidden" ? "" : "hidden");
    setBotVisbility(!botVisibility);
  };
  return (
    <div className="min-vh-100 position-relative   ">
    <header  style={{ backgroundImage: "url('/help.jpeg')",backgroundRepeat: 'no-repeat', backgroundSize: 'cover',height:'250px'}}>
    <div className="container d-flex flex-column align-items-center justify-content-center gap-6  h-100">
        <h1 className="text-4xl font-bold text-white text-center">Help Center</h1>
        <div className="d-flex p-1 gap-1  rounded-md bg-white rounded  ">
          <div className=" d-flex align-items-center justify-content-center" style={{height:'30px'}}>
            <img src="/search-icon.svg" alt="searchIcon"  style={{width:'20px'}}/>
          </div>
          <div className="h-100 d-flex align-items-center ">
            <input
              type="text"
              placeholder="Search"
              value={searchTopic}
              onChange={(e) => setSearchedTopic(e.target.value)}
              className="p-1 text-sm h-100"
              style={{width:'250px',outline:'none'}}
            />
          </div>
        </div>
      </div>
    </header>

    <section className="d-flex flex-column py-5 bg-body-tertiary min-vh-50 gap-4 ">
      <div className="container d-flex flex-column align-items-center gap-4">
        <h1 className="font-weight-bold">Need help?</h1>
        <p className="text-sm text-center">
          Click a topic below to get started, brush up on features and workflows, or troubleshoot an issue.
        </p>
      </div>
      <div className="container px-2 md:px-5 py-4 d-flex justify-content-center md:justify-content-between flex-wrap gap-4 ">
        {filteredTopics.map((topic, index) => (
          <Topic
            key={index}
            imgPath={topic.imgPath}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>
    </section>
    <footer className="border-top border-gray-400 py-4 text-center bg-slate-100 text-sm">
        All Rights Reserved
    </footer>
    <section className="position-fixed end-0 rounded-lg d-flex flex-column gap-4 align-items-end" style={{bottom:'80px'}}>
        {botVisibility &&
            <div className={` rounded bg-body-tertiary  ${chat}`} style={{scrollbarWidth:'thin',height:'350px', widows:'250px',overflow:'scroll',overflowX: 'hidden'}}>
                <Bot/>
            </div>
        }
        <img
            src="/chatbot-icon.svg"
            alt="chatbot"
            style={{width:'50px',cursor:'pointer'}}
            onClick={handleChatVisibility}
        />
    </section>
</div>
  );
}

export default Help;
