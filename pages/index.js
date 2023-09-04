import MeetupList from "./../components/meetups/MeetupList";
const DummyItems = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://c8.alamy.com/comp/2C46HEW/3d-selection-of-spheres-and-random-objects-on-pedestal-in-front-of-orange-wall-3d-illustration-2C46HEW.jpg",
    address: "Random Address",
    discription: "First get together",
  },
];
const HomePage = () => {
  return <MeetupList meetups={DummyItems} />;
};

export default HomePage;
