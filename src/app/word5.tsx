type pagesProps = {
  setPage: (value: number) => void;
};

export default function Word1(props: pagesProps) {
  return (
    <div>
      <h2 className="text-3xl	font-serif">
        Laki laki mana yang bisa marah kalo ngambeknya kayak gitu :V
        <br /> <br />
        kayak setengah2 gitu, marah setengah2 ketawa setengah2 wkwkw
      </h2>
      <button
        onClick={() => props.setPage(6)}
        className="mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        lanjut
      </button>
    </div>
  );
}
