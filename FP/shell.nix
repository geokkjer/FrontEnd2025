{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs
    nodePackages.npm
    nodePackages.typescript
    nodePackages.typescript-language-server
    nodePackages.yarn

    
    # Development tools
    watchman     # File watching service
    git
    
    # Optional but recommended tools
    tree         # Directory structure viewer
    jq           # JSON processor
  ];

  shellHook = ''
    export PATH="$PWD/node_modules/.bin:$PATH"
    echo "Node.js development environment loaded"
    echo "Node version: $(node --version)"
    echo "NPM version: $(npm --version)"
  '';
}