import React from "react";

export default function MainContent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center text-center">
        <div className="flex justify-center gap-20">
          <div className="flex justify-center items-center">
            <img src="/images/logo.png" alt="logo" width={400} />
          </div>
        </div>
        <div className="mt-8 text-4xl font-bold">
          <span>Ethos</span>
          <span
            style={{
              color: "#32CD32",
            }}
          >
            Hack
          </span>
        </div>
        <div className="mt-4 max-w-4xl px-8">
          <p>
            <b>EthosHack</b> is a 24-hour hackathon organized by Sudur Paschim Samparka Samaj and Pashchimanchal Campus, in collaboration with the Innovative Computer Engineering Students' Society. It brings together Nepalese students with a shared interest in technology, culture, and innovation. The hackathon aims to celebrate and preserve Nepal's diverse cultural heritage by combining technology and innovation. Participants are encouraged to create projects that showcase the cultural richness, traditions, and attractions of different regions of Nepal. EthosHack provides a platform for collaboration, idea generation, and development of software, applications, and solutions.</p>
        </div>
        <div className="bg-blue p-6">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYav028UepPC0EVpm6qqMUct8W1lPRBEQ9IJTnggdGFkOwvA/viewform" target="blank">
            <button>Register Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
