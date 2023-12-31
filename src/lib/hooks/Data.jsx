/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../lib/helpers/supabaseClient.js";
import { useAuth } from "./Auth.tsx";
import { useReducer } from "react";
import { useParams } from "react-router-dom";

const APIContext = createContext();

const APIContextProvider = ({ children }) => {
  const adminId = import.meta.env.VITE_SUPABASE_ID;
  const { user, session } = useAuth();
  const [allProfiles, setAllProfiles] = useState([]);
  const [allChilds, setAllChilds] = useState([]);
  const [userChilds, setUserChilds] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [userProfile, setUserProfile] = useState([]);

  const fetchData = () => {
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
        .select(`*, courses(*),childs(*), available_hours(*)`)
        .order("created_at", { ascending: true })
        .eq("user_id", user.id)
        .then((resultBookingData) => {
          setUserBookings(resultBookingData.data);
        });

      // USER PROFILES
      const { data: userProfileData } = supabase
        .from("profiles")
        .select()
        .eq("id", user.id)
        .then((resultUserProfileData) => {
          setUserProfile(resultUserProfileData.data[0]);
        });

      // ADMIN ONLY
      if (user.id === adminId) {
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
          .select(`*, courses(*),childs(*), available_hours(*)`)
          .then((resultBookingsData) => {
            setAllBookings(resultBookingsData.data);
          });
      } else {
        return;
      }
    } else {
      return;
    }
  };
  useEffect(() => {
    fetchData();
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
