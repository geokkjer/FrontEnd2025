fn main() {
    let server = gleam::http::Server::new();
    let router = web::router::router();

    server.route(router);
    server.listen(4000).expect("Failed to start server");
}