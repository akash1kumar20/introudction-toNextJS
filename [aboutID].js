import { useRouter } from "next/router";
const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
const akashKumar = () => {
  const router = useRouter();
  const routerID = router.query.aboutID;
  //query give us the access to the nested route.
  //aboutID is the name which we give in the square bracket

  return (
    <>
      {details
        .filter((item) => item.id == routerID)
        .map((item) => (
          <div key={item.id}>
            <h1>
              Hello My Name is {item.name}, and my role is {item.role}
            </h1>
          </div>
        ))}
    </>
  );
};

export default akashKumar;
