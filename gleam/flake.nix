{
  description = "Gleam development environment with direnv";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {inherit system;};
    in {
      devShell = pkgs.mkShell {
        name = "gleam-dev-shell";

        buildInputs = [
          pkgs.gleam
          pkgs.erlang
          pkgs.rebar3
        ];

        shellHook = ''
        '';
      };
    });
}
