import { syncFetch } from "./helpers.ts";

const mainTag = document.querySelector<HTMLElement>('#app')!;
const urlFromText = (text: string) => `https://api.openverse.org/v1/images/?q=${text}`;
const imgTag = (url: string) => `<img src="${url}" />`;

const app = async (event: Event) => {
    const input = event.target as HTMLInputElement;
    const text = input.value;
    const apiUrl = urlFromText(text);
    const data = syncFetch(apiUrl);
    const imageInfos = data.results;
    const imageUrls = imageInfos.map((i: any) => i.url);
    const imgTags = imageUrls.map(imgTag);
    const html = imgTags.join('');
    mainTag.innerHTML = html;
};

const inputTag = document.querySelector<HTMLElement>('input')!;
inputTag.addEventListener('change', app);
