import React from 'react';
import DisplayPersonality from './DisplaySquad/DisplayPersonality';
import DisplaySkills from './DisplaySquad/DisplaySkills';
import DisplayDates from './DisplaySquad/DisplayDates';
import DisplayTimeCommitment from './DisplaySquad/DisplayTimeCommitment';
import DisplayCfmMember from './DisplaySquad/DisplayCfmMember';
import Grid from '@mui/material/Unstable_Grid2';
import ImageCard from './ImageCard';

const inputArr = [
    {
      squadName : "Squad Gay",
      EventName  : "LIT Hackathon 2023",
      SkillsRequired : ["Skill 1", "Skill 2", "Skill 3"],
      FromDate : "22/11/1990",
      ToDate : "22/11/2222",
      TimeCommitment : 5,
      Personality : "Gay",
      ConfirmedMembers : ["Member1", "Member2", "Member3"],

    }
]


const SquadViewComponent = () => {
<<<<<<< Updated upstream
  const { squadName, EventName, SkillsRequired, FromDate, ToDate, TimeCommitment, Personality, ConfirmedMembers } = inputArr[0];
=======
  const { squadid } = useParams(); // this is the username

  useEffect(() => {
    fetch(`http://localhost:5000/get-squad/${squadid}`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setSquadName(data.squad.squadName);
        setEventName(data.squad.eventName);
        setSkillsRequired(data.squad.skillsRequired);
        setFromDate(data.squad.fromDate.slice(5, 16));
        setToDate(data.squad.toDate.slice(5, 16));
        setTimeCommitment(data.squad.timeCommitment);
        setPersonality(data.squad.personality);
        setConfirmedMembers(data.squad.confirmedMembers);
      });
  }, []);

  const [squadName, setSquadName] = useState("");
  const [eventName, setEventName] = useState("");
  const [skillsRequired, setSkillsRequired] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [timeCommitment, setTimeCommitment] = useState(0);
  const [personality, setPersonality] = useState("");
  const [confirmedMembers, setConfirmedMembers] = useState([]);

>>>>>>> Stashed changes
  return (
    <div className="group-view">
      <h1>{squadName}</h1>
      <h2>{EventName}</h2>

<<<<<<< Updated upstream
    <ImageCard />
      
=======
      <ImageCard Event = {eventName} />
>>>>>>> Stashed changes

      <div className="group-info">
        <h2>Group Information</h2>
        <Grid container spacing = {2}>
            <Grid xs={6}>
                <DisplayPersonality Personality ={Personality}/>
            </Grid>
            <Grid xs={6}>
                <DisplaySkills Skills ={SkillsRequired} />
            </Grid>
            <Grid xs={6}>
                <DisplayDates FromDate = {FromDate} ToDate = {ToDate}/>
            </Grid>
            <Grid xs={6}>
                <DisplayTimeCommitment TimeCommitment ={TimeCommitment} />
            </Grid>
            <Grid xs={12}>
                <DisplayCfmMember ConfirmedMembers ={ConfirmedMembers} />
            </Grid>
        </Grid>

      </div>
    </div>
  );
};

export default SquadViewComponent;
