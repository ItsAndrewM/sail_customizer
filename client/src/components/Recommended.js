import { useLocation } from "react-router-dom";

const Reccommended = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      {/* {location.state &&
        location.state.answers.map((ele) => {
          return (
            <>
              <p>{ele.question}</p>
              <p>{ele.answers}</p>
            </>
          );
        })} */}
    </div>
  );
};

export default Reccommended;
