import { Feature, Header, Wrapper } from "../components";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Header
        sub="Learn more about"
        main1="the"
        main2="risen christ"
        main3="christain centre"
        url="/assets/Village.jpg"
      />
      <Wrapper
        url="/assets/Belief.jpg"
        title="who we are"
        text="See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Elevation guide our decisions as a church."
      />
      <Wrapper
        url="/assets/Past.jpg"
        title="our vision"
        text="See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Elevation guide our decisions as a church."
      />
      <Wrapper
        url="/assets/GGMhI6jWUAAR8_Q.jpeg"
        title="our mission"
        text="See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Elevation guide our decisions as a church."
      />

      {/* OUR PASTOR SECTION */}
      <Feature paddingTop="pt-0" />
    </div>
  );
};

export default About;
