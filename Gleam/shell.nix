{
  pkgs ? import <nixpkgs> {
    config = {
      allowUnfree = true;
    };
  },
}:

pkgs.mkShell {
    packages = with pkgs; [
      gleam
      glas
      erlang
      erlang-ls
      erlang-language-platform
      inotify-tools
      rebar3
    ];

 shellHook = ''
    '';
}
