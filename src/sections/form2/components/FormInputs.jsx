import Team from "./team.jsx";
import Player2 from "./player2.jsx";
import Player3 from "./player3.jsx";
import Player4 from "./player4.jsx";
import Player5 from "./player5.jsx";
import TeamLeader from "./teamLeader.jsx";
import useFormContext from "../hooks/useFormContext.jsx";
import { useEffect, useState } from "react";

const FormInputs = (data) => {
  const { page } = useFormContext();
  const display = {
    0: <Team />,
    1: <TeamLeader />,
    2: <Player2 />,
    3: <Player3 />,
    4: <Player4 />,
    5: <Player5 />,
  };

  const content = <div className="z-1 h-[100%]">{display[page]}</div>;

  return content;
};
export default FormInputs;
