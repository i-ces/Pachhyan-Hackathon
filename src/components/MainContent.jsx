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
        <div className="mt-8 text-4xl font-bold">Pachyaan Hackathon</div>
        <div className="mt-4 max-w-2xl px-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quibusdam inventore dolore provident.
            Iste cupiditate doloribus labore! Nisi excepturi, veritatis facilis rem voluptates tempore aliquid quo ipsum
            quis fuga cumque.
          </p>
        </div>
      </div>
    </div>
  );
}
