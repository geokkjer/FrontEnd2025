import { compose, map, prop, join, syncFetch } from "./helpers";

const urlFromText = (text: string) => `https://api.openverse.org/v1/images/?q=${text}`;
const imgTag = (url: string) => `<img src="${url}" />`;

const trace = (label: string) => (x:any) => {
  console.log(label, x);
  return x;
}

const getElement = (selector: string): HTMLElement => document.querySelector<HTMLElement>(selector)!;
const impure = {
  getElement,
  setHtml: (html: string) => getElement('#app').innerHTML = html,
  syncFetch
}

const app = compose(
  impure.setHtml,   // impureSetHtml(html)
  trace('9 - slått sammen til en tekst'),
  join(''),         // const html = imgTags.join('')
  trace('8 - liste av img tags'),
  map(imgTag),      // const imgTags = imgResults.map(imgTag)
  trace('7 - array av urler til bilder'),
  map(prop('url')), // const imageUrls = results.map(r => r.url)
  trace('6 - .results'),
  prop('results'),  // const imageInfos = data.results
  trace('5 - api svar'),
  impure.syncFetch, // const data = syncFetch(url)
  trace('4 - api url'),
  urlFromText,      // const url = urlFromText(text)
  trace('3 - input.value'),
  prop('value'),    // const text = input.value
  trace('2 - event-target'),
  prop('target'),    // const input = event.target
  trace('1 - change event'),
);

const inputTag = impure.getElement('input');
inputTag.addEventListener('change', app);


/*
const app = compose(
  impure.setHtml,   // impureSetHtml(html)
  join(''),         // const html = imgTags.join('')
  map(imgTag),      // const imgTags = imgResults.map(imgTag)
  map(prop('url')), // const imageUrls = results.map(r => r.url)
  prop('results'),  // const imageInfos = data.results
  impure.syncFetch, // const data = syncFetch(url)
  urlFromText,      // const url = urlFromText(text)
  prop('value'),    // const text = input.value
  prop('target'),    // const input = event.target
);
*/