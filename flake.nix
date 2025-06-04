{
  description = "Frontend development environment with Node.js and Deno";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_20
            deno
            yarn
            pnpm
            git
          ];

          shellHook = ''
            echo "Frontend development environment loaded!"
            echo "Node.js version: $(node --version)"
            echo "Deno version: $(deno --version)"
          '';
        };
      });
}