import Callback from "../components/callback";
import Effect from "../components/effect";
import Memo from "../components/memo";
import State from "../components/state";

const Hook = () => {
  return (
    <>
      <State />
      <Memo />
      <Callback />
      <Effect />
    </>
  );
};

export default Hook;
