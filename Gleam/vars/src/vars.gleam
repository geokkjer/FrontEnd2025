import gleam/io
import gleam/string

pub fn main() -> Nil {
  io.println("Hello from vars!")
  print_hello()
  print_goodbye()
  greet("Alice")
  greet("Bob")


}
pub fn print_hello() -> Nil {
  io.println("Hello from print_hello!")
}
pub fn print_goodbye() -> Nil {
  io.println("Goodbye from print_goodbye!")
}
pub fn greet(name: String) -> Nil {
  io.println(string.join(["home","evan","Desktop"], with: "/"))
  io.println("Hello " <> name <> "!")
}
