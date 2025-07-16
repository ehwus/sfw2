import newsItems from "../components/news";
import { useBilingualism } from "../hooks/useBilingalism";
import { ToniaAntoniazziResponse } from "../components/news/ToniaAntoniazziResponse";
import { CrimeAndPolicingBill } from "../components/news/CrimeAndPolicingBill";
import { Introduction } from "../components/news/Introduction";

export function News() {
  const { language } = useBilingualism();

  // Article metadata for table of contents
  const articleData = [
    {
      id: "tonia-antoniazzi-response",
      title: "A response to Tonia Antoniazzi MPs parliamentary statement",
      date: "3 July 2025",
      component: ToniaAntoniazziResponse
    },
    {
      id: "crime-and-policing-bill",
      title: "Oppose clauses NC2 and NC3 of the Crime and Policing Bill 2025",
      date: "18 June 2025",
      component: CrimeAndPolicingBill
    },
    {
      id: "introduction",
      title: language === "English" ? "Introducing Safety First Wales!" : "Cyflwyno Diogelwch yn Gyntaf Cymru!",
      date: "1 July 2023",
      component: Introduction
    }
  ];

  const scrollToArticle = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

      return (
      <section className="w-full flex flex-col">
        <div className="flex flex-col lg:flex-row gap-8 m-5 lg:m-10">
          {/* Articles */}
          <main className="lg:w-2/3 flex flex-col gap-10">
            <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-40 h-11 mb-5">
              {language === "English" ? "NEWS" : "NEWYDDION"}
            </h3>
            {articleData.map((article, index) => {
              const ArticleComponent = article.component;
              return (
                <div key={index} id={article.id} className="scroll-mt-5">
                  <ArticleComponent />
                </div>
              );
            })}
          </main>

          {/* Table of Contents */}
          <aside className="lg:w-1/3 lg:sticky lg:top-5 lg:self-start">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h4 className="text-lg font-bold mb-4 text-center">
                {language === "English" ? "Contents" : "Cynnwys"}
              </h4>
              <nav>
                <ul className="space-y-3">
                  {articleData.map((article, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToArticle(article.id)}
                        className="text-left w-full hover:text-blue-600 transition-colors"
                      >
                        <div className="text-sm font-medium line-clamp-2">
                          {article.title}
                        </div>
                        <div className="text-xs text-gray-500 italic mt-1">
                          {article.date}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </section>
    );
}

