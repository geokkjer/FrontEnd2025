import { Maybe, liftA2, append, concat, reverse } from '@mostly-adequate/support';

const a = Maybe.of("yltsoM").map(reverse);
const b = Maybe.of("Adequate").map(concat(" "));

liftA2(append)(b)(a);