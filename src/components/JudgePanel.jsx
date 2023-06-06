import React from 'react';
import './judgepanel.css';
import Title from './subcomponents/Title';
import Card from './subcomponents/Card';

const JudgePanel = () => {
  const mentorsData = [
    {
      id: 1,
      name: 'Tilak Khatri',
      position: 'Coordinator',
   avatar:'/images/tilak_avatar.jpg',
   social:'https://www.facebook.com/tilak.khatri.50309277',
   phone:9809456396
    },
    {
      id: 2,
      name: 'Shishir Rijal',
      position: 'Sub-Coordinator',
      avatar:'/images/shishir_avatar.png', social:'https://www.facebook.com/ShishirRijal01',
      phone:9822949639
    },
  ];

  return (
    <div className='mentors'>
      <Title text="Contact" />
      <div className='mentors-main'>
        {mentorsData.map((mentor) => (
          <Card
            key={mentor.id}
            name={mentor.name}
            position={mentor.position}
            avatar={mentor.avatar}
            social={mentor.social}
            phone={mentor.phone}

          />
        ))}
      </div>
    </div>
  );
};

export default JudgePanel;
