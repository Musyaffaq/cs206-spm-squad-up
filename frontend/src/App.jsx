import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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

import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container style={{ paddingBottom: "4em" }}>
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
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
