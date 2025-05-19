// compose :: ((y -> z), (x -> y),  ..., (a -> b)) -> a -> z
const compose = (...fns: Function[]) => (...args: any[]) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

const prop = (key: string) => (obj: any) => obj[key];

const map = (fn: (item: any) => any) => (arr: any[]) => arr.map(fn);

const join = (sep: string) => (arr: any[]) => arr.join(sep);

const syncFetch = (url: string) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false); // false = synkront
    xhr.send();

    if (xhr.status === 200) {
        return JSON.parse(xhr.responseText);
    }
}

export { compose, map, prop, join, syncFetch };