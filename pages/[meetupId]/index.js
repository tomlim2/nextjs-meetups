import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    ></MeetupDetail>
  );
};

export async function getStaticPath() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "a1",
        },
      },
      {
        params: {
          meetupId: "a2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tel-Aviv_PinesStreet31_T53.jpg",
        id: meetupId,
        title: "A first meetup",
        address: "11th, some, 1234",
        description: "hi",
      },
    },
  };
}

export default MeetupDetails;
