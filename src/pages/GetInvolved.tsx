export function GetInvolved() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-40 h-11 mx-auto mt-5 lg:m-10">
        GET INVOLVED
      </h3>
      <aside className="lg:p-24 flex flex-col gap-8 m-5">
        <h4 className="text-lg font-bold">Join the coalition</h4>
        <p className="text-justify">
          {/*  todo - add link to contact page */}
          If you’re a sex worker in Wales, an organisation or supporter and want
          to get involved in the campaign, please get in touch with us.
        </p>
        <hr className="bg-black h-1 w-56 mx-auto lg:mx-0" />
        <h4 className="text-lg font-bold">Make a donation</h4>
        <p className="text-justify">
          {/*  todo - add link to paypal */}
          Please support our campaigning work by making a donation via PayPal
          here.
        </p>
        <hr className="bg-black h-1 w-56 mx-auto lg:mx-0" />
        <h4 className="text-lg font-bold">Circulate the petition</h4>
        <p className="text-justify">
          {/*  todo - add link to paypal */}
          Click here to sign and share.
        </p>
      </aside>
    </section>
  );
}
