import React from 'react';
import './judgepanel.css';
import Title from './subcomponents/Title';
import Card from './subcomponents/Card';

const JudgePanel = () => {
  const mentorsData = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Senior Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   avatar:'/images/avatar.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avatar:'/images/avatar.jpg'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'Data Scientist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avatar:'/images/avatar.jpg'
    },
  ];

  return (
    <div className='mentors'>
      <Title text="Mentors" />
      <div className='mentors-main'>
        {mentorsData.map((mentor) => (
          <Card
            key={mentor.id}
            name={mentor.name}
            position={mentor.position}
            description={mentor.description}
            avatar={mentor.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default JudgePanel;
