import React from "react";
import { WelcomePage } from "./components/WelcomePage";
import { PersonPage } from "./components/PersonPage";
import { FamilySelection } from "./components/FamilySelection";

function App() {
  const familyMembers = [
    {
      name: "Mom",
      description:
        "Merry Christmas Maman! I know that this year was a very challenging one both physically and mentally. I just wanted to say that I am very proud of you for being so strong and optimistic throughout it all. I hope that 2025 is the year where you overcome cancer and make it just a past struggle. I also hope that you are happy, healthy, and successful during this year. I will always love you and Merry Christmas!",
      images: [
        "src/Assets/IMG_3375.jpg",
        "src/Assets/mom_2.jpg"
      ],
    },
    {
      name: "Dad",
      description:
        "Merry Christmas Baba! I wanted to congratulate you on overcoming 2024 :) . There have been a lot of struggles during the year, especially moving so many times. I hope that 2025 is the year where you hopefully only have to move once. I also hope that it is a healthy, happy, and successful year for you and that you are able to get whatever you wish. I love you a lot and wish you a Merry Christmas!",
      images: [
        "src/Assets/dad_2.jpg",
        "src/Assets/grad_b.jpg",
      ],
    },
    {
      name: "Rojina",
      description:
        " Merry Christmas Rojina! We are finally almost finished with the year of 2024. I hope that 2024 was a good year for you and that 2025 will be an even better year for you, especially since you are finally done with university.  I know that it is a big transition in your life and you don’t know what the next step in your life is, but I hope that whatever you end up doing is successful and brings a lot of joy. Particularly studying and actually doing the MCAT as it is probably going to be really hard but I know you are going to do great. Merry Christmas and I love you 300 ❤️",
      images: [
        "src/Assets/roj_1.jpg",
        "src/Assets/grad_r.JPEG",
      ],
    },
  ];

  return (
    <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll">
      <WelcomePage />
      <FamilySelection familyMembers={familyMembers} />

      {familyMembers.map((member, index) => (
        <div
          key={member.name}
          id={`person-${member.name.toLowerCase()}`}
          className="snap-start"
        >
          <PersonPage {...member} index={index} />
        </div>
      ))}
    </div>
  );
}

export default App;
