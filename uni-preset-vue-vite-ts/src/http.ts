import { createLyla } from "lylajs-uni";

const { lyla } = createLyla({
  baseUrl: 'https://api.github.com',
  context: null,
  hooks: {
    onBeforeRequest: [(o) => {
      console.log(o);
      return o
    }],
    onResponseError: [(e) => {
      console.log(e.message);
    }]
  }
})

export {
  lyla
};