import Image from "next/image";

import Image1 from "./media/1.jpeg";
import Image2 from "./media/2.jpeg";
import Image3 from "./media/3.jpeg";
import Image4 from "./media/4.jpeg";
import Image5 from "./media/5.jpeg";

type pagesProps = {
  setPage: (value: number) => void;
};

export default function Word1(props: pagesProps) {
  return (
    <div>
      <h2 className="text-2xl	font-serif">Soalnya kalo ngambek lucu gini :</h2>
      <br />
      <Image width={200} src={Image1} alt="1" />
      <h2 className="text-2xl	font-serif">ini juga:</h2>
      <br />
      <Image width={200} src={Image2} alt="1" />
      <h2 className="text-2xl	font-serif">ini apalagi :</h2>
      <br />
      <Image width={200} src={Image3} alt="1" />
      <Image width={200} src={Image4} alt="1" />
      <br />
      <h2 className="text-2xl	font-serif">
        kalo ngambek mancung banget bibirnya :
      </h2>
      <Image width={200} src={Image5} alt="1" />

      <button
        onClick={() => props.setPage(5)}
        className="mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        lanjut
      </button>
    </div>
  );
}
