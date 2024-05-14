import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/landing-page/hero/hero";
import About from "~/components/landing-page/about/about";


export default component$(() => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
