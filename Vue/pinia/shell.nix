{
  pkgs ? import <nixpkgs> {
    config = {
      allowUnfree = true;
    };
  },
}:

pkgs.mkShell {
    packages = with pkgs; [
  # Use the latest version of Node.js
    nodejs
    macchina
    deno
    ];

 shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
        echo "Setting up shell aliases..."
    '';
}