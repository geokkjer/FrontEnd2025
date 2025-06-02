import gleam/io
import mist
import gleam/http/request.{type Request}
import gleam/http/response.{type Response}
import gleam/string_tree

pub fn main() {
  let handler = fn(_req: Request(t)) -> Response(string_tree.StringTree) {
    response.new(200)
    |> response.set_body(string_tree.from_string("Hello from Gleam!"))
  }

  let assert Ok(_) =
    mist.new(handler)
    |> mist.port(4000)
    |> mist.start_http

  io.println("Server started on http://localhost:4000")
}