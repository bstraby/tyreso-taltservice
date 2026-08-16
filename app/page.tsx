"use client";

import Image from "next/image";
import {
  FormEvent,
  useState,
} from "react";

export default function Home() {
  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

  const [
    isSubmitted,
    setIsSubmitted,
  ] = useState(false);

  const [
    submitError,
    setSubmitError,
  ] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const formData =
        new FormData(form);

      const response =
        await fetch(
          "https://formsubmit.co/ajax/annlinda.straby@gmail.com",
          {
            method: "POST",
            headers: {
              Accept:
                "application/json",
            },
            body: formData,
          },
        );

      if (!response.ok) {
        throw new Error(
          "Formuläret kunde inte skickas.",
        );
      }

      form.reset();
      setIsSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-[#f7f5ef] text-[#17352b]">
      <section className="relative h-[590px] overflow-hidden md:h-[620px]">
        <Image
          src="/images/hero-rendered.png"
          alt="Partytält från Tyresö Tältservice vid en sjö"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5ef]/88 via-[#f7f5ef]/28 to-transparent" />

        <header className="absolute inset-x-0 top-0 z-20 mx-auto w-full max-w-[1500px] px-6 py-7 md:px-10 lg:px-14">
          <div className="text-[#17352b]">
            <div className="mb-2 h-7 w-14 border-x border-t border-[#17352b] opacity-80" />

            <p className="text-[17px] font-semibold leading-none tracking-[0.24em] md:text-[20px]">
              TYRESÖ
            </p>

            <p className="mt-2 text-[17px] font-semibold leading-none tracking-[0.24em] md:text-[20px]">
              TÄLTSERVICE
            </p>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center px-6 pt-20 md:px-10 lg:px-14">
          <div className="max-w-[650px]">
            <h1 className="font-serif text-[46px] leading-[1.08] tracking-[-0.025em] sm:text-5xl md:text-6xl lg:text-[68px]">
              Vi skapar
              <br />
              minnesvärda stunder.
            </h1>

            <p className="mt-6 max-w-[520px] text-lg leading-7 md:text-xl md:leading-8">
              Tält, bord och stolar för bröllop, fest och event
              <br className="hidden sm:block" /> i Stockholm med omnejd.
            </p>

            <a
              href="#offert"
              className="mt-7 inline-flex items-center justify-center gap-5 rounded-xl bg-[#17352b] px-7 py-4 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-[#244b3d]"
            >
              BEGÄR KOSTNADSFRI OFFERT
              <span
                className="text-lg"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#17352b]/10 bg-[#f7f5ef]">
        <div className="mx-auto grid max-w-[1200px] md:grid-cols-3">
          <Service
            icon={<TentIcon />}
            title="TÄLT"
            text="Stabila och rymliga partytält i flera storlekar. För fest, student, bröllop och andra tillfällen. Pris från 1250 kr."
          />

          <Service
            icon={<FurnitureIcon />}
            title="BORD & STOLAR"
            text="Bekväma bord och stolar som passar både små och stora sällskap."
          />

          <Service
            icon={<ToolsIcon />}
            title="MONTERING"
            text="Vi sköter leverans, montering och nedmontering så att du kan fokusera på din fest."
          />
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-[1250px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Partytält från Tyresö Tältservice i naturnära miljö"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-[#6d7f56]">
              OM OSS
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Erfarenhet, kvalitet
              <br />
              och personlig service
            </h2>

            <p className="mt-6 max-w-[650px] text-[17px] leading-8 text-[#31483f]/85">
              Tyresö Tältservice är ett lokalt företag som hjälper till att
              skapa en trygg och fin inramning för fest, bröllop, student och
              andra tillfällen. Vi hyr ut tält, bord och stolar och hjälper
              även till med leverans, montering och nedmontering.
            </p>

            <p className="mt-4 max-w-[650px] text-[17px] leading-8 text-[#31483f]/85">
              För oss är det viktigt att det ska vara enkelt att ordna festen.
              Därför lägger vi stor vikt vid personlig service, pålitliga
              produkter och att allt fungerar som det ska från början till
              slut.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <AboutPoint text="Lokal och personlig service" />
              <AboutPoint text="Tält, bord och stolar" />
              <AboutPoint text="Leverans och montering" />
              <AboutPoint text="Små och stora tillställningar" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-14 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-center text-2xl font-semibold tracking-[0.04em] md:text-3xl">
            BILDER FRÅN VÅRA UPPDRAG
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-12 bg-[#829a43]" />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <GalleryImage
              src="/images/hero.jpg"
              alt="Partytält vid sjö"
            />

            <GalleryImage
              src="/images/pool.jpg"
              alt="Partytält vid pool"
            />

            <GalleryImage
              src="/images/student.jpg"
              alt="Studentfest i partytält"
            />

            <GalleryImage
              src="/images/garden.jpg"
              alt="Partytält i trädgård"
            />
          </div>
        </div>
      </section>

      <section
        id="offert"
        className="scroll-mt-0 bg-[#12352b] px-6 py-12 text-white md:px-10"
      >
        <div className="mx-auto grid max-w-[1250px] gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="text-3xl font-semibold">
              KONTAKT
            </h2>

            <div className="mt-3 h-[2px] w-10 bg-[#9bad52]" />

            <p className="mt-7 text-lg font-medium">
              Tyresö Tältservice
            </p>

            <p className="mt-3 leading-7 text-white/75">
              Linda Stråby
              <br />
              Almstigen 2, Tyresö
              <br />
              0733 797 391
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">
              BEGÄR OFFERT
            </h2>

            <div className="mt-3 h-[2px] w-10 bg-[#9bad52]" />

            <p className="mt-5 text-white/80">
              Fyll i formuläret så återkommer vi med ett förslag
              anpassat efter dina behov.
            </p>

            {isSubmitted ? (
              <div className="mt-7 rounded-xl border border-white/20 bg-white/10 px-6 py-7">
                <p className="text-xl font-semibold">
                  Tack!
                </p>

                <p className="mt-2 leading-7 text-white/90">
                  Din förfrågan är nu skickad och vi återkommer till dig så
                  snart vi kan.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-7 grid gap-3 sm:grid-cols-2"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Ny offertförfrågan – Tyresö Tältservice"
                />

                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <input
                  required
                  name="Namn"
                  placeholder="Namn"
                  autoComplete="name"
                  className="rounded-md bg-white px-4 py-4 text-[#17352b] outline-none"
                />

                <input
                  required
                  name="Telefon"
                  type="tel"
                  placeholder="Telefon"
                  autoComplete="tel"
                  className="rounded-md bg-white px-4 py-4 text-[#17352b] outline-none"
                />

                <input
                  required
                  name="E-post"
                  type="email"
                  placeholder="E-post"
                  autoComplete="email"
                  className="rounded-md bg-white px-4 py-4 text-[#17352b] outline-none sm:col-span-2"
                />

                <textarea
                  required
                  name="Meddelande"
                  rows={5}
                  placeholder="Meddelande – datum, plats, antal gäster och önskemål"
                  className="resize-none rounded-md bg-white px-4 py-4 text-[#17352b] outline-none sm:col-span-2"
                />

                {submitError && (
                  <p className="rounded-md bg-red-950/30 px-4 py-3 text-sm text-white sm:col-span-2">
                    Något gick fel när förfrågan skulle skickas. Försök igen.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex cursor-pointer items-center justify-center rounded-md bg-[#829a43] px-6 py-4 font-semibold tracking-wide text-white transition hover:bg-[#91aa4e] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
                >
                  {isSubmitting
                    ? "SKICKAR..."
                    : "SKICKA OFFERTFÖRFRÅGAN →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#f7f5ef] px-6 py-5 text-center text-sm text-[#17352b]/65">
        © {new Date().getFullYear()} Tyresö Tältservice
      </footer>
    </main>
  );
}

function AboutPoint({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-[#17352b]/10 py-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#718854] text-sm font-bold text-white">
        ✓
      </span>

      <span className="text-[15px] font-medium text-[#31483f]">
        {text}
      </span>
    </div>
  );
}

function Service({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="flex min-h-[220px] flex-col items-center justify-center border-[#17352b]/10 px-8 py-9 text-center md:border-r md:last:border-r-0">
      <div className="mb-5 text-[#31553e]">
        {icon}
      </div>

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 max-w-[285px] leading-6 text-[#273c34]/80">
        {text}
      </p>
    </article>
  );
}

function GalleryImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
    </div>
  );
}

function TentIcon() {
  return (
    <svg
      width="64"
      height="48"
      viewBox="0 0 64 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 20L32 4L60 20M8 20H56V44H8V20ZM32 4V44M8 44L20 25L32 44L44 25L56 44"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FurnitureIcon() {
  return (
    <svg
      width="68"
      height="48"
      viewBox="0 0 68 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M23 18H45M26 18L24 44M42 18L44 44M8 8V28M8 22H19M12 22L16 44M60 8V28M49 22H60M56 22L52 44"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg
      width="58"
      height="52"
      viewBox="0 0 58 52"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13 5L24 16L18 22L7 11L6 6L13 5ZM21 25L42 46M37 9C40 5 46 4 50 6L43 13L45 18L50 20L56 14C57 19 55 24 51 27C47 30 42 30 38 28L18 48C15 51 10 51 7 48C4 45 4 40 7 37L27 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}