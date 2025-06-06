{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    gleam
    erlang
    rebar3
    nodejs
    tailwindcss
    fish
    git
    curl
    jq
  ];

  shellHook = ''
    echo "Development environment loaded!"
    echo "Available tools:"
    echo "- Gleam: $(gleam --version)"
    echo "- Erlang: $(erl -eval 'erlang:display(erlang:system_info(otp_release)), halt().' -noshell)"
    echo "- Node.js: $(node --version)"
    echo "- Rebar3: $(rebar3 version)"
    echo "- TailwindCSS: $(tailwindcss --help | head -3)"

  '';
  # Optional: Set environment variables 

} 

  

