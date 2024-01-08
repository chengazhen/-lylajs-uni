import { createLyla } from "lylajs-uni";

const { lyla } = createLyla({
  baseUrl: 'https://api.example.com/',
  hooks: {
    onInit: [(o) => o]
  },
  context: null
})