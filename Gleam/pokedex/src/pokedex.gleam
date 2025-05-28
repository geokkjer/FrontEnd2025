import lustre
import lustre/attribute.{class}
import lustre/element/html

pub fn main() {
  let app =
    lustre.element(
      html.header([class("p-4 bg-red-500 text-white")], [
        html.h1([class("w-full mx-auto maw-w-screen-xl text-4xl font-bold")], [
          html.text("Pokedex!"),
        ]),
      ]),
    )
  let assert Ok(_) = lustre.start(app, "#app", Nil)
}
