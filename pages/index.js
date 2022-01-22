import MeetupList from "../components/meetups/MeetupList";

const MOCKUP = [
  {
    id: "a1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tel-Aviv_PinesStreet31_T53.jpg",
    address: "address wawa 12 1, 1290",
    description: "this this netmable",
  },
  {
    id: "a2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Main_entrance_of_Grand_Palais%2C_Paris_July_2014.jpg",
    address: "address news 12 1, 1290",
    description: "this this second AOS",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

//for generally
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from an API
//   return {
//     meetups: MOCKUP,
//   };
// }

// //SSG for auth
export async function getStaticProps() {
  return {
    props: {
      meetups: MOCKUP,
    },
    revalidate: 10,
  };
}

export default HomePage;
