import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container style={{ paddingBottom: "4em" }}>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>

            <Route path="/profiles" element={<ViewProfiles />}></Route>
            {/* edit to make it dynamic according to username */}
            <Route path="/profiles/sub-profile" element={<Profile />} />
            <Route path="/profiles/edit" element={<EditProfile />} />

            <Route path="/squads" element={<ViewSquads />}></Route>
            <Route path="/squads/create" element={<CreateSquad />} />
            {/* edit to make it dynamic according to squadid */}
            <Route path="/squads/sub-squad" element={<Squad />} />

            <Route path="/events" element={<ViewEvents />}></Route>
            {/* edit to make it dynamic according to eventid */}
            <Route path="/events/sub-event" element={<Event />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
