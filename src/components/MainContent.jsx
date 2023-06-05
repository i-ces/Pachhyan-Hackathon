import React from 'react';

export default function MainContent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center text-center">
        <div className="flex justify-center gap-20">
          <div className="flex items-center justify-center w-24 h-24">
            <img src="/images/data.png" alt="something1" height={100} width={100} />
          </div>
          <div className="flex justify-center items-center w-24 h-24 border-dashed border">
            Logo part
          </div>
          <div className="flex items-center justify-center w-24 h-24">
            <img src="/images/data.png" alt="something1" height={100} width={100} />
          </div>
        </div>
        <div className="mt-8 text-4xl font-bold">Pachhyan Hackathon</div>
        <div className="mt-4 max-w-4xl px-8">
          <p >
            Pachhyan hackathon is a 48 hour event on the theme “Culture and Tourism: Unleashing Technology's Potential”  with the aim of fostering innovation and promoting the cultural heritage and tourism potential. In today's rapidly evolving world, technology has become an integral part of our daily lives, shaping industries and transforming the way we interact with the world around us. The culture and tourism sectors are no exception, with technology offering endless possibilities for enhancing visitor experiences, preserving cultural heritage, and promoting sustainable tourism practices. This  hackathon seeks to harness the creative power of technology enthusiasts, developers, designers, and entrepreneurs to ideate, collaborate, and develop innovative solutions that will revolutionize the culture and tourism landscape.
          </p>
        </div>
        <button >
          <span className='bg-blue border-white'>
            Register now
          </span>
        </button>
      </div>

    </div>
  );
}
