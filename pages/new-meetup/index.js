import { useRouter } from "next/router";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const router = useRouter();
  console.log("d");
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUpPage;
