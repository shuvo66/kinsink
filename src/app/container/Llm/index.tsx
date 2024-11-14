import { GetInTouch } from "../Home/component/GetInTouch";
import { ClientSays } from "../MobileApp/component/ClientSays";
import { Model } from "./component/model";
import { Research } from "./component/Research";
import { WhyhooseUs } from "./component/Whychoose";
const Llm = () => {
  return (
    <>
      <Model />
      <Research />
      <WhyhooseUs />
      <GetInTouch />
      <ClientSays />
    </>
  );
};

export default Llm;
