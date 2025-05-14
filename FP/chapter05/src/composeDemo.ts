type ComposableFunctionType<T1, T2> = (arg1: T1) => T2;

const compose = <A, B, C>(
    f: ComposableFunctionType<B, C>,
    g: ComposableFunctionType<A, B>)
    : ComposableFunctionType<A, C> =>
    (a: A) => f(g(a));

const compose3 = <A, B, C, D>(
    f: ComposableFunctionType<C, D>,
    g: ComposableFunctionType<B, C>,
    h: ComposableFunctionType<A, B>)
    : ComposableFunctionType<A, D> =>
    (a: A) => f(g(h(a)));

const compose4 = <A, B, C, D, E>(
    f: ComposableFunctionType<D, E>,
    g: ComposableFunctionType<C, D>,
    h: ComposableFunctionType<B, C>,
    i: ComposableFunctionType<A, B>)
    : ComposableFunctionType<A, E> =>
    (a: A) => f(g(h(i(a))));

type ReduceOneFunctionType = (resultArray: string[], text: string, currentIndex: number, originalArray: string[]) => string[];
const reduce = (f: ReduceOneFunctionType) =>
    (initalValue: string[]) =>
        (array: string[]) =>
            array.reduce(f, initalValue);
const head = (x: string[]) => x[0];
const reverse = reduce((acc, x) => [x, ...acc])([]);
const toUpperCase = (x: string) => x.toUpperCase();
const exclaim = (x: string) => `${x}!`;

const demo1 = () => {
    const shout = compose(exclaim, toUpperCase);

    const txt = shout('send in the clowns'); // "SEND IN THE CLOWNS!"

    console.log(txt);
};

const demo2 = () => {

    const last = compose(head, reverse);

    const theLast = last(['jumpkick', 'roundhouse', 'uppercut']); // 'uppercut'

    console.log(theLast);
}

const demo3 = () => {
    // previously we'd have to write two composes, but since it's associative, 
    // we can give compose as many fn's as we like and let it decide how to group them.
    const arg = ['jumpkick', 'roundhouse', 'uppercut'];
    const lastUpper = compose3(toUpperCase, head, reverse);
    const loudLastUpper = compose4(exclaim, toUpperCase, head, reverse);

    const value1 = lastUpper(arg); // 'UPPERCUT'
    const value2 = loudLastUpper(arg); // 'UPPERCUT!'

    console.log(value1, value2); 
};


export default demo2;