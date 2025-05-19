import gleam/io

pub fn main() -> Nil {
  io.println("Hello from vars!")
  print_hello()
  print_goodbye()
}
pub fn print_hello() -> Nil {
  io.println("Hello from print_hello!")
}
pub fn print_goodbye() -> Nil {
  io.println("Goodbye from print_goodbye!")
}
