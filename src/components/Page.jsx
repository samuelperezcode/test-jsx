import { sum, rest, div, mult } from "./Matem";

const calc = {
  n1: 5,
  n2: 10,
};

export function Page() {
  return (
    <body>
      <div className="photo">
        <img src="/images/mats.png" alt="Mats" />
      </div>
      <div className="page">
        <b>Calculos</b>
        <ul>
          <li>{sum(calc.n1, calc.n2)}</li>
          <li>{rest(calc.n1, calc.n2)}</li>
          <li>{div(calc.n1, calc.n2)}</li>
          <li>{mult(calc.n1, calc.n2)}</li>
        </ul>
      </div>
    </body>
  );
}
