import { Feature, Header, Wrapper } from "../components";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Header
        sub="Learn more about"
        main1="the"
        main2="risen christ"
        main3="christain centre"
        url="https://pbs.twimg.com/profile_banners/1252735328013647872/1630683401/1500x500"
      />
      <Wrapper
        url="https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/415204655_17883819032986364_4059200460895841372_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFcz9B_9N_tcC1kFe65SwOf1T-kBg_uWRXVP6QGD-5ZFfNWl18R8NiDRbyrt8EwZGvG-DOiw8n889QH4Q_uYlek&_nc_ohc=GFlU4SJsUfwAX-GRYFr&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AfA0WeGw7ZS8d7TkLUCoxdAXKK-2UJmew5DiV4wLMuYTmw&oe=65E3BFC7"
        title="who we are"
        text="See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Elevation guide our decisions as a church."
      />
      <Wrapper
        url="https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/429654539_17891751818986364_3453017257330003291_n.jpg?stp=c0.87.1440.1440a_dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeFomNXfjPrsW3oCLpAaGY7w9cSK5UHTWi71xIrlQdNaLueZiCe3HSIFX2IboY9PHf1Bpf4Pm-CjABAlSlhqwgIT&_nc_ohc=yguidVEgD3wAX_vlH-D&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AfDVy44OgYND4-k6ovb7SwExax4HsLmMcF_xokv8bxoImg&oe=65E4950A"
        title="our vision"
        text="See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Elevation guide our decisions as a church."
      />
      <Wrapper
        url="https://pbs.twimg.com/media/GGMhI6jWUAAR8_Q?format=jpg&name=large"
        title="our mission"
        text="See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Elevation guide our decisions as a church."
      />

      {/* OUR PASTOR SECTION */}
      <Feature paddingTop="pt-0" />
    </div>
  );
};

export default About;
