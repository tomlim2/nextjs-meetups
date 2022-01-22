import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    ></MeetupDetail>
  );
};

export const getStaticPaths = async () => {
  return {
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
    fallback: false,
  };
};


export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);
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
