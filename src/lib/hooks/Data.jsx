/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../lib/helpers/supabaseClient.js";
import { useAuth } from "./Auth.tsx";

const APIContext = createContext();

const APIContextProvider = ({ children }) => {
  const id = import.meta.env.VITE_SUPABASE_ID;
  const { user, session } = useAuth();
  const [allProfiles, setAllProfiles] = useState([]);
  const [allChilds, setAllChilds] = useState([]);
  const [userChilds, setUserChilds] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    if (session) {
      // ALL COURSES
      const { data: coursesData } = supabase
        .from("courses")
        .select()
        .then((resultCoursesData) => {
          setAllCourses(resultCoursesData.data);
        });

      // USER CHILDS
      const { data: userChildsData } = supabase
        .from("childs")
        .select()
        .eq("user_id", user.id)
        .then((resultUserChildsData) => {
          setUserChilds(resultUserChildsData.data);
        });

      // USER BOOKINGS
      const { data: bookingsData } = supabase
        .from("bookings")
        .select(`*, courses(*), available_hours(*)`)
        .order("booking_date", { ascending: true })
        .eq("user_id", user.id)
        .then((resultBookingData) => {
          setUserBookings(resultBookingData.data);
        });

      const { data: userProfileData } = supabase
        .from("profiles")
        .select()
        .eq("id", user.id)
        .then((resultUserProfileData) => {
          setUserProfile(resultUserProfileData.data);
        });

      // ADMIN ONLY
      if (user.id === id) {
        // ALL CHILDS
        const { data: childsData } = supabase
          .from("childs")
          .select()
          .then((resultChildsData) => {
            setAllChilds(resultChildsData.data);
          });

        // ALL PROFILES
        const { data: profilesData } = supabase
          .from("profiles")
          .select()
          .then((resultProfilesData) => {
            setAllProfiles(resultProfilesData.data);
          });

        // ALL BOOKINGS
        const { data: bookingsData } = supabase
          .from("bookings")
          .select()
          .then((resultBookingsData) => {
            setAllBookings(resultBookingsData.data);
          });
      } else {
        return;
      }
    } else {
      return;
    }
  }, []);
  return (
    <APIContext.Provider
      value={{
        allChilds,
        allBookings,
        allCourses,
        allProfiles,
        userBookings,
        userChilds,
        userProfile,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;

export const useAPI = () => {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
