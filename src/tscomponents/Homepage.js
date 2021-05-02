import React, { useEffect } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
// import { gsap } from "gsap";
import { Link, useHistory } from "react-router-dom";
import { fetchData } from "../actions";
const useThunkDispatch = () => useDispatch();

export default function Homepage() {
  const dispatch = useThunkDispatch();
  const history = useHistory();
  const user = useSelector((state) => state);
  // Animations on render
  // useEffect(() => {
  //   gsap.from(".slide", {
  //     opacity: 0,
  //     scale: 0,
  //     duration: 1,
  //   });
=======
import { useDispatch } from "react-redux";
// import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { fetchData } from "../actions";
const useThunkDispatch = () => useDispatch();

>>>>>>> main

export default function Homepage() {
  const dispatch = useThunkDispatch();
  // const history = useHistory();
  // const user = useSelector((state) => state);

<<<<<<< HEAD
  //   gsap.from(".layer-2", {
  //     opacity: 0,
  //     y: 100,
  //     duration: 1,
  //     delay: 2,
  //   });
  // });
  useEffect(() => {
    console.log("fetching");
    dispatch(fetchData());
    if (!!user.user) {
      history.push("/classes");
    }
  }, []);
=======
  useEffect(() => {
    console.log("fetching");
    dispatch(fetchData());
    // if (!!user.user) {
    //   console.log('if')
    //   history.push("/classes");
    // }
  }, [dispatch]);
>>>>>>> main

  return (
    <div>
      <div id="slider">
        <div
          className="slide"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
          }}
        >
          <div className="layer-1">
            <h2>Welcome to Anytime Fitness!</h2>
            <h3>Work out. Wherever. Whenever.</h3>
          </div>

          <div className="layer-2">
            <Link to="/auth/register">Register</Link>

            <Link to="/auth/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
