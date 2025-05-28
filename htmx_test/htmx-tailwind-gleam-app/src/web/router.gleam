fn routes() {
    Router.get("/", home_handler)
}

fn home_handler(req: Request) -> Response {
    Response.ok("Welcome to the HTMX, Tailwind, and Gleam app!")
}