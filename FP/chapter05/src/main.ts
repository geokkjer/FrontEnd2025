import reduceDemo from './reduceDemo';
import composeDemo from './composeDemo';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*HTML*/`
  <div>
  Forberedelser
    <li>array-funksjonen reduce</li>
    Fra boken
    <li>compose</li>
    <li>pointfree funksjoner</li>
    <li>kategori-teori</li>
  </div>
`

reduceDemo();
composeDemo();