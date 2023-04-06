import instagramLogo from "../assets/instagram.svg";
import twitterLogo from "../assets/twitter.svg";

export function Contact() {
  return (
    <section className="w-full flex flex-col lg:flex-row mb-7 mt-2.5">
      <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-32 h-11 mx-auto mt-5 lg:m-10">
        CONTACT
      </h3>
      <aside className="lg:p-24 flex flex-col gap-8 m-5">
        <p>
          Please get in touch if you have any questions about Safety First Wales
        </p>
        <a href="mailto:contact@safetyfirstwales.org">
          contact@safetyfirstwales.org
        </a>
        <div className="flex gap-2.5">
          <a href="#">
            <img src={instagramLogo} alt="Instagram logo" className="h-8" />
          </a>
          <a href="#">
            <img src={twitterLogo} alt="Twitter logo" className="h-8" />
          </a>
        </div>
      </aside>
    </section>
  );
}
