import { createSignal } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);
  return (
    <>
      {count()}
      <button type="button" onclick={() => setCount(count() + 1)}>
        up
      </button>
    </>
  );
}
