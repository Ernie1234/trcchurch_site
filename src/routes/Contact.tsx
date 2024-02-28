import { Button1, Header, Heading } from "../components";

function Contact() {
  return (
    <div>
      <Header
        sub="contact us"
        main1="Let's keep"
        main2="in touch"
        url="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/429654293_17891751881986364_9028925723236850813_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEgqV7RWAHaOtS3VC8T_fbRudk1UAPgdq652TVQA-B2rp4A0EhoOnjhEowIIXMAOVGlbxwAPyNi10riHkJEMI-C&_nc_ohc=L8Flep3zfGIAX_ckG9W&_nc_ht=scontent-los2-1.xx&oh=00_AfCiOMAu8zdV3QyGhu85t2Bjasl-6oBC4EsYTYpBN-7dbQ&oe=65E3B438"
        main3=""
      />
      <div className="w-[70vw] mt-12 md:mt-24 ">
        <Heading sub="tell us about you" main="your details" />
      </div>
      <div className="flex items-center justify-center w-[80vw] mt-24 mx-auto mb-16">
        <form className="flex-1 flex flex-col justify-center gap-2 w-max">
          <input
            type="text"
            placeholder="name"
            className="p-3 bg-gray-200 border-none outline-none text-gray-500 border-gray-100 border-2 text-xl font-semibold rounded-sm"
          />
          <input
            type="text"
            placeholder="email"
            className="p-3 bg-gray-200 border-none outline-none text-gray-500 border-gray-100 border-2 text-xl font-semibold rounded-sm"
          />
          <textarea
            className="p-3 bg-gray-200 border-none outline-none text-gray-500 border-gray-100 border-2 text-xl font-semibold rounded-sm"
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <Button1 title="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
