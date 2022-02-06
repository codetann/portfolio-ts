import TypeWriter from "typewriter-effect";

export function useTypeWriter(words: string[]) {
  return (
    <TypeWriter options={{ strings: words, autoStart: true, loop: true }} />
  );
}
