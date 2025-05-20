import { of, from, interval, map, take, filter } from 'rxjs';

interval(1000).pipe(
    take(25),
    filter(x => x % 3 === 0),
    map(n => `Tick ${n}`),
).subscribe(console.log);