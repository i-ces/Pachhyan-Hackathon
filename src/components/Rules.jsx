import React from 'react';
import Title from './subcomponents/Title';
import './rules.css';

export default function Rules() {
  return (
    <div className="rules-container">
      <div className="rules-section">
        <Title text="Guidelines" className="rules-title" />
        <div className="rules-content pt-3 text-left">
          <ol>
            <li>- The hackathon will run for 24 hours nonstop from 15th(9am) to 16th(9am) of Ashad.</li>
            <li>- Each team has to pay Rs. 2000 as registration fee, but afterwards the team selected for hackathon.</li>
            <li>- Registration after deadline will not be accepted.</li>
            <li>- Projects should be under the provided domain.</li>
            <li>- Final demonstration should be done along with presentation.</li>
            <li>- The overall venue will be CIT Hall, IOE, Pashchimanchal Campus, Pokhara.</li>
          </ol>
        </div>
      </div>
      <div className="rules-section">
        <Title text="Rules" className="rules-title" />
        <div className="rules-content pt-3 text-left">
        <ol>
            <li>- Each team has to involve at least 2 members and can go up to 4 members.</li>
            <li>- All team members should be present at the event. Leaving the prescribed venue will disqualify the entire team from the hackathon.</li>
            <li>- All work on the project should be done during the hackathon. However, teams can use an idea they had before the event. </li>
            <li>- No development may start before the actual date and time of the event. Any teams that violate this rule will be automatically disqualified. </li>
            <li>- Teams can use libraries, frameworks, or open-source code in their projects with proper references mentioned clearly.</li>
            <li>- Participants must face the consequences if any suspected activities occur.</li>
            <li>- The prize will be awarded to the team, and is to be shared between the teammates.</li>
            <li>- Each team should create a common Github repository and constantly push the updates made in the project between specified time intervals.</li>
            <li>- The winner will be announced based on decision of judge panel.</li>
            <li>- In the event of disagreement, the decision of the organizing committee will be the final decision.</li>
          </ol>
        </div>
      </div>
      <div className="rules-section">
        <Title text="Code of Conduct" className="rules-title" />
        <div className="rules-content pt-3 text-left">
        <ol>
            <li>- You must treat all team members, including competitors, judges, mentors, volunteers, etc. with respect and courtesy.</li>
            <li>- Participants must not smoke, drink, or perform any unethical behavior like quarrellings that will harm the integrity of this event. If such an event is encountered, strict actions will be taken against the team.</li>
            <li>- Except the core team, no guest should be brought to the event premises. </li>
            <li>- Any discrimination against cast, culture, race, ethnicity, language and so on will not be tolerated and may result in disqualifying the team.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
