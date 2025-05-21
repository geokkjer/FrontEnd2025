import { compose, map, prop, join, syncFetch } from "./helpers";

// Types
type ImageResult = {
  url: string;
}

type ApiResponse = {
  results: ImageResult[];
}

type Event = {
  target: {
    value: string;
  }
}

// Pure functions for data transformation
const buildApiUrl = (text: string) => `https://api.openverse.org/v1/images/?q=${text}`;
const createImageTag = (url: string) => `<img src="${url}" alt="search result" />`;
const extractValue = (event: Event): string => prop('value')(prop('target')(event));
const extractResults = (response: ApiResponse) => prop('results')(response);
const extractUrls = (results: ImageResult[]) => map(prop('url'))(results);
const createImageTags = (urls: string[]) => map(createImageTag)(urls);
const combineHtml = (tags: string[]) => join('')(tags);

// Logging helper (can be removed in production)
const trace = (label: string) => <T>(x: T): T => {
  console.log(label, x);
  return x;
};

// Side effects container
const effects = {
  getElement: (selector: string): HTMLElement => 
    document.querySelector<HTMLElement>(selector) ?? 
    (() => { throw new Error(`Element ${selector} not found`) })(),
  setHtml: (html: string) => (element: HTMLElement): void => {
    element.innerHTML = html;
  },
  fetchData: syncFetch
};

// Main composition
const processSearchQuery = compose(
  combineHtml,
  trace('8 - image tags created'),
  createImageTags,
  trace('7 - urls extracted'),
  extractUrls,
  trace('6 - results extracted'),
  extractResults,
  trace('5 - api response'),
  effects.fetchData,
  trace('4 - api url created'),
  buildApiUrl,
  trace('3 - value extracted'),
  extractValue
);

// Setup (side effects)
const setupApp = () => {
  const app = effects.getElement('#app');
  const input = effects.getElement('input');
  
  const handleChange = (event: Event): void => {
    const html = processSearchQuery(event);
    effects.setHtml(html)(app);
  };

  input.addEventListener('change', handleChange as Event);
};

// Initialize
setupApp();