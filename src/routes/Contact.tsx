import { Button1, Header, Heading } from "../components";

function Contact() {
  return (
    <div>
      <Header
        sub="contact us"
        main1="Let's keep"
        main2="in touch"
        url="/assets/contact1.jpg"
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
          <Button1 title="Send" handleFn={() => {}} />
        </form>
      </div>
    </div>
  );
}

export default Contact;
