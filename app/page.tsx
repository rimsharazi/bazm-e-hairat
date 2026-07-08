export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0b0b] text-[#ddd6ca]">

      {/* subtle light behind title */}
      <div className="absolute inset-0">
        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#3a3328]
          opacity-20
          blur-3xl
          "
        />
      </div>


      <section className="relative z-10 flex flex-col items-center px-6 text-center">

        <h1
          className="
          font-serif
          text-6xl
          tracking-wide
          text-[#f5f1e8]
          md:text-8xl
          "
        >
          بزمِ حیرت
        </h1>


        <p
          className="
          mt-6
          font-serif
          text-3xl
          italic
          text-[#b89662]
          "
        >
          Bazm-e-Hairat
        </p>


        <p
          className="
          mt-12
          max-w-lg
          text-sm
          leading-8
          text-[#8e877d]
          "
        >
          A gathering of words,
          <br />
          wonder,
          <br />
          and unfinished questions.
        </p>


        <button
          className="
          mt-16
          border
          border-[#8e877d]
          px-10
          py-3
          text-xs
          uppercase
          tracking-[0.4em]
          text-[#ddd6ca]
          transition
          duration-500
          hover:border-[#b89662]
          hover:text-[#b89662]
          "
        >
          Enter
        </button>


      </section>

    </main>
  );
}