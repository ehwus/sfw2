import newsItems from "../components/news";
import { useBilingualism } from "../hooks/useBilingalism";

export function News() {
  const { language } = useBilingualism();

  return (
    <section className="w-full flex flex-col lg:flex-row">
      <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-40 h-11 mx-auto mt-5 lg:m-10">
        {language === "English" ? "NEWS" : "NEWYDDION"}
      </h3>
      <div className="lg:p-24 flex flex-col gap-10 m-5">
        {newsItems.map((NewsItem, index) => (
          <NewsItem key={index} />
        ))}
      </div>
    </section>
  );
}

