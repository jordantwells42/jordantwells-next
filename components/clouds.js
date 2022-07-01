import { useEffect, useState, useRef } from "react";

import Cloud from "./Cloud.js";

export default function Clouds() {
  let [basePaddingTop, setBasePaddingTop] = useState(-50);

  let baseTop = [
    basePaddingTop,
    basePaddingTop,
    basePaddingTop,
    basePaddingTop,
    basePaddingTop,
    basePaddingTop,
  ];

  const num_clusters = 5;

  const offset1 = [0, 5, 0, 3, 0, 0];
  const offset2 = [0, 3, 1, 4, 2, 1];
  const offset3 = [0, 0, 0, 0, 0, 0];
  const offset4 = [0, 0, 0, 0, 0, 0];
  const offset5 = [0, 0, 0, 0, 0, 0];
  const offsets = [offset1, offset2, offset3, offset4, offset5];

  let cluster1Left = [5, 25, 5, 30, 5, 35];
  let cluster2Left = [60, 80, 55, 76, 50, 89];
  let cluster3Left = [12, 23, 9, 28, 6, 32];
  let cluster4Left = [63, 88, 52, 75, 53, 84];
  let cluster5Left = [53, 44, 52, 36, 53, 42];
  const clusterLefts = [
    cluster1Left,
    cluster2Left,
    cluster3Left,
    cluster4Left,
    cluster5Left,
  ];

  let clusters = [];

  for (let i = 0; i < num_clusters; i++) {
    let cluster = {};
    cluster.top = baseTop.map((e, idx) => {
      return e + offsets[i][idx];
    });
    cluster.left = clusterLefts[i];
    clusters.push(cluster);
  }

  const clusterSize = ["large", "normal", "small", "large", "normal", "large"];

  useEffect(() => {
    const onScroll = () => {
      setBasePaddingTop((prev) => {
        const paddingMin = 10;
        const paddingMax = 80;

        const scrollMin = 0;
        const scrollMax = window.innerHeight / 2;

        let currentScroll = window.scrollY;

        if (currentScroll > scrollMax) {
          currentScroll = scrollMax;
        }

        const new_val =
          ((currentScroll - scrollMin) / (scrollMax - scrollMin)) *
            (paddingMax - paddingMin) +
          paddingMin;

        return new_val;
      });
    };
    onScroll(); // To get float dowm from top effect
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-cyan-500 h-screen w-full items-center flex flex-col justify-center">
      <h2 className="text-center text-7xl text-purple-200">Hey! I&apos;m</h2>
      <h1 className="text-center text-8xl text-fuchsia-50">Jordan Wells</h1>
      {clusters.map((cluster) =>
        cluster.top.map((e, idx) => (
          <Cloud
            key={idx}
            size={clusterSize[idx]}
            displacement={5}
            paddingTop={cluster.top[idx]}
            paddingLeft={cluster.left[idx]}
          />
        ))
      )}
    </div>
  );
}
