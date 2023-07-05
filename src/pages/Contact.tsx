import instagramLogo from "../assets/instagram.svg";
import twitterLogo from "../assets/twitter.svg";
import { useBilingualism } from "../hooks/useBilingalism";
import facebookLogo from "../assets/facebook-circle.svg";

export function Contact() {
  const { language } = useBilingualism();

  return (
    <section className="w-full flex flex-col lg:flex-row mb-7 mt-2.5">
      <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-48 h-11 mx-auto mt-5 lg:m-10">
        {language === "English" ? "CONTACT" : "CYSYLLTWCH Â NI"}
      </h3>
      <aside className="lg:p-24 flex flex-col gap-8 m-5">
        <p>
          {language === "English"
            ? "Please get in touch if you have any questions about Safety First Wales"
            : "Cysylltwch os oes gennych unrhyw gwestiynau am Diogelwch yn Gyntaf Cymru."}
        </p>
        <a href="mailto:safety1stwales@gmail.com">safety1stwales@gmail.com</a>
        <div className="flex gap-2.5">
          <a
            href="https://www.instagram.com/safety1stwales/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramLogo} alt="Instagram logo" className="h-8" />
          </a>
          <a
            href="https://www.facebook.com/safety1stwales/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookLogo} alt="Instagram Logo" className="h-8" />
          </a>
          <a
            href="https://www.instagram.com/safety1stwales/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterLogo} alt="Twitter logo" className="h-8" />
          </a>
        </div>
      </aside>
    </section>
  );
}
