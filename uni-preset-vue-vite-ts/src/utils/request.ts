import { createLyla } from 'lylajs-uni';

const { lyla } = createLyla({
  baseUrl: 'https://mock.apifox.com/m1/4253475-3894970-default',
  context: null,
  hooks: {
    onBeforeRequest: [(o) => {    
      return o
    }],
    onResponseError: [(e) => {
      console.log(e.message);
    }]
  },
})

export {
  lyla
}