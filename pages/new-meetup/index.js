import NewMeetUp from "./../../components/meetups/NewMeetupForm";

const NewMeetUpForm = () => {
  const onAddMeetupHandler = (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
  };
  return <NewMeetUp onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetUpForm;
