{
  pkgs ? import <nixpkgs> {
    config = {
      allowUnfree = true;
    };
  },
}:

pkgs.mkShell {
    packages = with pkgs; [
    nodejs
    macchina
    deno
    ];

 shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}