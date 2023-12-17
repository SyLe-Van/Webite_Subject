import axios from "axios";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./DatingCards.css";

const DatingCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:4000/dating/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("receiving" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!!");
  };
  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
            <img src="https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/393003204_1514111392683548_4206460713441802419_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=aKPe-jaMHykAX87Exu9&_nc_ht=scontent.fhan4-2.fna&cb_e2o_trans=q&oh=00_AfDw4r2MvXPPHdcm_Qqjb3P0uSHltgcAmosjZUmKwLuM8w&oe=65830088"></img>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default DatingCards;
