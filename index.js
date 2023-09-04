import Link from "next/link";
const about = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <h3>Meet our team</h3>
      <h5>
        <Link href="http://localhost:3000/aboutUS/1">Yash</Link>
      </h5>
      <h5>
        <Link href="http://localhost:3000/aboutUS/2">Vaibhav</Link>
      </h5>
      <h5>
        <Link href="http://localhost:3000/aboutUS/3">Suresh</Link>
      </h5>
    </div>
  );
};

export default about;
