"use client";

import { useState } from "react";

import Word1 from "./word1";
import Word2 from "./word2";
import Word3 from "./word3";
import Word4 from "./word4";
import Word5 from "./word5";
import Word6 from "./word6";

export default function Home() {
  const [page, setPage] = useState(1);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      {page === 1 && <Word1 setPage={setPage} />}
      {page === 2 && <Word2 setPage={setPage} />}
      {page === 3 && <Word3 setPage={setPage} />}
      {page === 4 && <Word4 setPage={setPage} />}
      {page === 5 && <Word5 setPage={setPage} />}
      {page === 6 && <Word6 />}
    </main>
  );
}
