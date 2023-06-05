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
            <b>EthosHack</b> is a 24-hours long hackathon organized by Sudur Paschim Samparka Samaj, Pashchimanchal Campus in collaboration with Innovative Computer Engineering Students' Society (i-CES), which is targeted to any Nepalese student who wants to come together to collaboratively work on developing new ideas on a software, applications, or solutions within the specified timeframe based on the theme "Culture And Tourism‟.
            This event serves as a platform for the convergence of technology and culture, where we strive to forge meaningful connections that harness the transformative power of innovation to amplify and preserve the richness of our diverse cultural heritage. The hackathon aims to promote cultural exploration and appreciation and encourages the participants to leverage technology and innovation to create projects that showcase and celebrate the diverse cultural heritage, traditions, and attractions of different regions of Nepal.
          </p>
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
