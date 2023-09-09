/* eslint-disable no-unused-vars */
import { useAuth } from "../../lib/hooks/Auth.tsx";
import { supabase } from "../../lib/helpers/supabaseClient.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import ConfirmationModal from "../../Components/Clients/ConfirmationModal.jsx";
import SignIn from "./SignIn.jsx";
import Calendar from "../../Components/Calendar/Calendar.jsx";
import Text from "../../Components/Utils/Text.jsx";
import { useAPI } from "../../lib/hooks/Data";

const Bookings = () => {
  const { allCourses, userChilds } = useAPI();
  const navigate = useNavigate();
  const { user, session } = useAuth();
  const [selectedChild, setSelectedChild] = useState();
  const [selectedCourse, setSelectedCourse] = useState();
  const [showModal, setShowModal] = useState(false);

  function handleSelectedChild(e) {
    setSelectedChild((prevSelectedChild) => {
      return {
        ...prevSelectedChild,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSelectedCourses(e) {
    setSelectedCourse((prevSelectedCourse) => {
      return {
        ...prevSelectedCourse,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleForm = async (selectedHour, formattedDay) => {
    console.log(selectedCourse.courses);
    try {
      const { error } = await supabase.from("bookings").insert({
        user_id: user.id,
        child_id: selectedChild.childs,
        course_id: selectedCourse.courses,
        booking_date: formattedDay,
        hours: selectedHour,
      });
      if (error) throw error;
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleModal = () => {
    setShowModal(false);
    navigate("/profile");
  };
  if (!session) {
    return <SignIn />;
  } else {
    return (
      <div className="flexbox-col-start gap-10 default-page my-7">
        <h1 className="text-headline text-primary flex mx-auto xl:mb-10 font bold">
          Réservation
        </h1>
        <div className="flexbox-col lg:flexbox-row-start gap-10 lg:gap-16">
          <div className="flexbox-col gap-7 lg:gap-10">
            <section className="flexbox-col gap-7">
              <span className="text-default font-bold text-primary">
                Choisissez un{" "}
                {!selectedCourse ? (
                  <span>cours</span>
                ) : !selectedChild ? (
                  <span>enfant</span>
                ) : (
                  <span>horaire</span>
                )}
              </span>
            </section>
            <form className="form-input font-normal font-sans w-[300px] lg:w-[450px] max-w-[300px] lg:max-w-full ">
              <select
                name="courses"
                id="course"
                className="rounded-md border-grey-font border p-2 "
                onChange={handleSelectedCourses}
              >
                <option value="default" defaultValue hidden>
                  Choisir un cours
                </option>
                {allCourses?.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>
              {selectedCourse ? (
                <select
                  name="childs"
                  id="childs"
                  className="rounded-md border-grey-font border p-2"
                  onChange={handleSelectedChild}
                >
                  <option value="default" defaultValue hidden>
                    Prénom de l&apos;enfant
                  </option>
                  {userChilds?.length > 0 ? (
                    userChilds?.map((child) => (
                      <option key={child.id} value={child.id}>
                        {child.first_name}
                      </option>
                    ))
                  ) : (
                    <></>
                  )}
                </select>
              ) : (
                <></>
              )}
            </form>
            {selectedCourse && selectedChild ? (
              <Calendar onSubmit={handleForm} />
            ) : (
              <></>
            )}
            {showModal &&
              createPortal(
                <ConfirmationModal closeModal={handleModal} />,
                document.body
              )}
          </div>
          <div className="flexbox-col gap-7 lg:gap-16">
            <Text>
              <p>
                L&apos;entreprise se réserve le droit de refuser un rendez-vous
                ou de modifier unilatéralement les prix de son offre à tout
                moment, notamment en cas d&apos;augmentation des coûts, étant
                entendu que, en cas d&apos;augmentation des prix postérieure à
                l&apos;acceptation de l&apos;offre, seul le prix fixé au jour de
                cette acceptation sera applicable au client.
              </p>
            </Text>
            <Text>
              <p className="text-primary-var-2">
                Lorsque votre réservation sera complète, celle-ci sera bloquée
                en attendant de recevoir une validation par message ou email de
                la part de notre professeur.
              </p>
            </Text>
            <Text>
              <p className="text-bold">
                Toutes les cases de couleurs blanche ne sont pas disponibles car
                déjà réserver ou bien ce créneau ne correspond pas avec le type
                de cours choisi
              </p>
            </Text>
          </div>
        </div>
      </div>
    );
  }
};

export default Bookings;
