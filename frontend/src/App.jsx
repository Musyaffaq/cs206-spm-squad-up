import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./Components/ResponsiveAppBar";
import Homepage from "./Pages/Homepage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ViewProfiles from "./Pages/ViewProfiles";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import ViewSquads from "./Pages/ViewSquads";
import Squad from "./Pages/Squad";
import CreateSquad from "./Pages/CreateSquad";
import ViewEvents from "./Pages/ViewEvents";
import Event from "./Pages/Event";
import NoPage from "./Pages/NoPage";
import RouteGuard from "./Util/RouteGuard";
import FindMember from "./Pages/FindMember";

import Container from "@mui/material/Container";

// theme created using https://bareynol.github.io/mui-theme-creator/
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9a918c",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9a918c",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme") === "true"
      : true
  );
  

  window.addEventListener("theme", () => {
    setTheme(localStorage.getItem("theme") === "true");
  });
  return (
    <div>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Container maxWidth="md" style={{ marginTop: "1em" }}>
            <Routes>
              <Route path="/" element={<RouteGuard element={<Homepage />} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profiles"
                element={<RouteGuard element={<ViewProfiles />} />}
              />
              {/* edit to make it dynamic according to username */}
              <Route
                path="/profiles/sub-profile"
                element={<RouteGuard element={<Profile />} />}
              />
              <Route
                path="/profiles/edit"
                element={<RouteGuard element={<EditProfile />} />}
              />

              <Route
                path="/squads"
                element={<RouteGuard element={<ViewSquads />} />}
              />
              <Route
                path="/squads/create"
                element={<RouteGuard element={<CreateSquad />} />}
              />
              {/* edit to make it dynamic according to squadid */}
              <Route
                path="/squads/sub-squad"
                element={<RouteGuard element={<Squad />} />}
              />

              <Route
                path="/events"
                element={<RouteGuard element={<ViewEvents />} />}
              />
              {/* edit to make it dynamic according to eventid */}
              <Route
                path="/events/sub-event"
                element={<RouteGuard element={<Event />} />}
              />
              {/* edit to make it dynamic according to eventid */}
              
              <Route
                path="/findmember"
                element={<RouteGuard element={<FindMember />} />}
              />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
