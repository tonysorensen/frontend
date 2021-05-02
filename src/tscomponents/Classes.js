import React, { useEffect, useState } from "react";
<<<<<<< HEAD
// import { gsap } from "gsap";
import { Link, useHistory } from "react-router-dom";
// Import Components
import ClassCard from "./ClassCard";
import { connect, useSelector } from "react-redux";
=======
import { Link, useHistory } from "react-router-dom";
import ClassCard from "./ClassCard";
import { useSelector } from "react-redux";
>>>>>>> main
import { axiosWithAuth } from "../utilities/axiosWithAuth";

const Classes = (props) => {
  const user = useSelector((state) => state.user.data?.user);
  const history = useHistory();
  useEffect(() => {
    // console.log(user);
<<<<<<< HEAD
    if (!user) {
      history.replace("/auth/login");
    }
  }, []);
=======
    // if (!user) {
    //   history.replace("/auth/login");
    // }
  }, [history, user]);
>>>>>>> main
  // Setup the state that will get the classes
  const [classes, setClasses] = useState([]);

  // Set a state to disable buttons when it is deleting
  const [isDeleting, setIsDeleting] = useState(false);

<<<<<<< HEAD
  // Function for deleting a listing
  const deleteListing = (id) => {
    // Create a new array where the listing that matches the ID is removed
    const newListingArray = classes.filter((listing) => listing.id !== id);
=======
  // Function for deleting a fitClass
  const deleteClass = (id) => {
    // Create a new array where the fitClass that matches the ID is removed
    const newClassArray = classes.filter((fitClass) => fitClass.id !== id);
>>>>>>> main

    setIsDeleting(true);

    // Set the new fitClass array to the classes once the animation finishes
    setTimeout(() => {
      setClasses(newClassArray);
      setIsDeleting(false);
    }, 1000);

    // Delete fitClass from backend
    console.log("id", id);
    axiosWithAuth()
      .delete(`/:${id}`)
      .then((res) => {
        console.log("delete: res: ", res);
      })
      .catch((err) => console.log(`Unable to delete item # ${id}`, err));
  };

  return (
    <div id="classes">
      <div className="heading">
        <h3>
          Classes - {classes.length}{" "}
<<<<<<< HEAD
          {classes.length > 1 ? "classes" : "listing"} found
=======
          {classes.length > 1 ? "classes" : "fitClass"} found
>>>>>>> main
        </h3>

        <Link to="/AddClass">
          <button>Add New Class</button>
        </Link>
      </div>

      {classes.length > 0 &&
<<<<<<< HEAD
        classes.map((listing, index) => {
=======
        classes.map((fitClass, index) => {
>>>>>>> main
          const delayTimer = index;

          return (
            <ClassCard
              fitClass={fitClass}
              key={fitClass.id}
              deleteClass={deleteClass}
              delay={delayTimer}
              isDeleting={isDeleting}
            />
          );
        })}

      {classes.length <= 0 && (
        <p style={{ textAlign: "center" }}>No Classes Found</p>
      )}
    </div>
  );
};

export default Classes;
