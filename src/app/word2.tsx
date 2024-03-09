type pagesProps = {
  setPage: (value: number) => void;
};

export default function Word1(props: pagesProps) {
  return (
    <div>
      <h2 className="text-4xl	font-serif">
        Sebelumnya terimakasih, sekarang kalo lagi ngambek tetep mau hubungin
        mas, mas sayang putri 🩷{" "}
      </h2>
      <button
        onClick={() => props.setPage(3)}
        className="mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        lanjut
      </button>
    </div>
  );
}
