"use client";

import Image from "next/image";

export default function ProjectPage() {
  return (
    <div
      className="
        min-h-screen 
        bg-neutral-50 dark:bg-neutral-950 
        text-neutral-800 dark:text-neutral-200 
        transition-colors duration-300
      "
    >
      {/* === HERO COVER === */}
      <section className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
        <Image
          src="/kapak2.png"
          alt="Project Cover Image"
          fill
          className="object-cover object-center opacity-90"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60" />

        <div className="absolute bottom-10 left-0 w-full text-center px-4">
          <h1
            className="
              text-3xl md:text-5xl font-extrabold 
              text-white drop-shadow-lg
            "
          >
            Children's Tribune in Sports Project
          </h1>
        </div>
      </section>

      {/* === CONTENT WRAPPER === */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-20">

        {/* === PROJECT INFO CARDS === */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Project Information</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div
              className="
                p-6 rounded-2xl 
                bg-white dark:bg-neutral-900 
                border border-neutral-200 dark:border-neutral-800 
                shadow-sm hover:shadow-md transition
              "
            >
              <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                Project Name
              </h3>
              <p className="mt-2 font-bold">
                CHILDREN'S TRIBUNE IN SPORTS SOCIAL RESPONSIBILITY PROJECT
              </p>
            </div>

            <div
              className="
                p-6 rounded-2xl 
                bg-white dark:bg-neutral-900 
                border border-neutral-200 dark:border-neutral-800 
                shadow-sm hover:shadow-md transition
              "
            >
              <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                Project Duration
              </h3>
              <p className="mt-2 font-bold">Ongoing</p>
            </div>

            <div
              className="
                p-6 rounded-2xl 
                bg-white dark:bg-neutral-900 
                border border-neutral-200 dark:border-neutral-800 
                shadow-sm hover:shadow-md transition
              "
            >
              <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                Project Coordinator
              </h3>
              <p className="mt-2 font-bold">
                Hakan COŞKUN
                <span className="block font-normal text-sm">
                  Investigative Journalist / Press Advisor
                </span>
              </p>
            </div>

          </div>
        </section>

        {/* === SECTION: SUBJECT & PURPOSE === */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Subject and Purpose</h2>

          <div className="prose dark:prose-invert prose-neutral text-lg leading-relaxed">
            <p>
              The subject of this project is to ensure that children between the
              ages of 7 and 15 are placed in a designated section at stadiums
              (the Children's Tribune) through collaboration with schools and
              football clubs, and that they participate in group activities there.
            </p>

            <p>
              The purpose of the project is to establish a healthy lifestyle
              culture intertwined with sport in our country and to instill sports
              awareness in children from an early age.
            </p>
          </div>
        </section>

        {/* === SECTION: GOALS === */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Project Goals</h2>

          <ul className="list-disc ml-5 space-y-3 text-neutral-700 dark:text-neutral-300 text-lg">
            <li>To prevent violence and foul language in stadiums.</li>
            <li>To keep children away from substance addiction.</li>
            <li>To encourage more children and female spectators to attend matches.</li>
            <li>To instill a love of sport in children from an early age.</li>
            <li>To increase the number of conscious supporters in future years.</li>
            <li>To help children develop healthy lifestyle habits.</li>
          </ul>
        </section>

        {/* === SECTION: ACTIVITIES === */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Activities</h2>

          <ul className="space-y-4 text-lg">
            <li>✓ Artistic events: cinema, theater, photography competitions.</li>
            <li>✓ Sports simulation events in mobile vehicles.</li>
            <li>✓ Awareness through banners themed "CAUTION: CHILDREN PRESENT!"</li>
            <li>✓ Gifts introducing children to various sports branches.</li>
            <li>✓ Increasing children's chanting participation during matches.</li>
          </ul>
        </section>

        {/* === SECTION: RATIONALE & BENEFITS === */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Rationale and Benefits</h2>

          <div className="prose dark:prose-invert prose-neutral text-lg leading-relaxed">
            <p>
              According to research, the children's tribune practice is an
              effective method for reducing incidents of violence in the stands.
              It also encourages children to take an interest in sport, helps
              them grow into conscious supporters, and enables clubs to build a
              stronger fan base in the future.
            </p>

            <p>
              A large proportion of violence occurring at sports competitions takes
              place during football matches. This practice will protect children
              while also making a positive contribution to sports culture.
            </p>
          </div>
        </section>

        <p className="text-lg font-semibold">With Kind Regards,<br />Hakan COŞKUN</p>
      </div>
    </div>
  );
}