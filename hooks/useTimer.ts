import { useEffect, useRef, useState } from "react";

type CallBackFn = (...args: any[]) => any;

function useInterval(callback: CallBackFn, delay: number) {
  const savedCallback = useRef<CallBackFn | null>(null);
  console.log(savedCallback)

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current?.();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

type timerOptions = {
  interval?: number;
};

const defaultOptions: timerOptions = {
  interval: 1000,
};

export function useTimer(options: timerOptions = defaultOptions) {
  const { interval } = options;
  const [count, setCount] = useState(0);
  useInterval(() => setCount(count + 1), interval ?? 1000);

  return count;
}
