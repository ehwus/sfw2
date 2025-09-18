import septemberNewsPhoto from "../../assets/september-news-photo.jpeg";

export function PrivateLivesPublicFictions() {
  return (
    <article className="flex flex-col gap-5">
      <h4 className="text-lg font-bold">
        Private Lives, Public Fictions
      </h4>
      <h5 className="italic">18 September 2025</h5>

      <p className="text-justify">
        We are pleased to announce Private Lives, Public Fictions, an exhibition and zine launch hosted by Safety First Wales.
      </p>

      <img 
        src={septemberNewsPhoto} 
        alt="Private Lives, Public Fictions exhibition" 
        className="w-full max-w-md mx-auto rounded-lg shadow-md"
      />

      <p className="text-justify">
        This interactive event, created in collaboration with sex workers and sex working artists, captures and communicates the experience of sex workers, confronting misinformation and well-worn stereotypes. It offers reflections on daily life, as well as aspirations and imaginations for the future. The room invites you to humanise those on the margins, and to hear their voices, and to live in the way they see fit.
      </p>

      <p className="text-justify">
        Join us for a panel discussion on Tuesday 28th October with leading international experts from Safety First Wales, Amnesty International, US PROStitutes Collective, Scotland4Decrim, Street Workers Collective Ireland and the English Collective of Prostitutes. The discussion will reflect on the exhibit and its resonance with the global sex workers' rights movement. It will consider issues relating to rights, safety and well-being and explore the implications for policy and practice in Wales.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
        <h6 className="font-bold text-gray-800 mb-2">Event Details:</h6>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Panel event:</strong> Tuesday 28th October 2025, 14:00 - 15:30
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Location:</strong> Volcano Theatre, 27 - 29 High Street, Swansea SA1 1LG
        </p>
        <p className="text-sm text-gray-700">
          <strong>Open exhibit drop in:</strong> 28th - 31st October
        </p>
      </div>
    </article>
  );
}
