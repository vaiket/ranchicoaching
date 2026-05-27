"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({
  target,
  duration = 1.8,
  prefix = "",
  suffix = "",
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp end={target} duration={duration} prefix={prefix} suffix={suffix} separator="," />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}
