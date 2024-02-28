import { Card, Header, Heading, Live } from "../components";

function Program() {
  return (
    <div>
      <Header
        sub="hello"
        main1="our"
        main2="live Programs"
        main3="and features"
        url="/images/growth.webp"
      />
      <div className="w-[70vw] mt-16 md:mt-20 lg:mt-28">
        <Heading main="Live events" sub="Our live programs and shows" />
      </div>
      <Live />
      <div className="w-[70vw] mt-16 md:mt-20 lg:mt-28">
        <Heading main="Our Programs" sub="features and events" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center p-3 md:p-8 lg:p-12 ">
        <Card
          title="mid-week service"
          desc="saturday - 4pm"
          image="https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/291488652_591013442630649_81949429070928046_n.jpg?stp=dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeFcFFlnLZzbwqC9EJ93xEpkS6fhVLoqSzRLp-FUuipLNIJqjx1_dXQCrZTL0z6Cj2b6ADZN6LMwROk2hs2jwwUh&_nc_ohc=ZhB3JJac4tYAX-ZwIEH&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&oh=00_AfDspHyuXPxwLKVnV0gmxZhtPakiHlVvPmghDo00YUC0qA&oe=65E3B07C"
          link="program detail"
        />
      </div>
    </div>
  );
}

export default Program;
