import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ciftci.thoxia.com/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
