export default function Word1() {
  return (
    <h2 className="text-3xl	font-serif">
      mas tau, ketika kita lagi gak mood kita butuh waktu buat nenangin diri.
      <br />
      <br />
      jadi mas akan memberikan waktu dan tetap ngehubungin adek sampai mood adek
      baik
      <br />
      <br />
      kalau moodnya udah baik dan pingin cuddle lagi, jangan lupa hubungi nomer
      yang tertera dibawah ini ya
      <button
        onClick={() => {
          window.open(
            "https://wa.me/6285708880099",
            "_blank",
            "noopener,noreferrer"
          );
        }}
        className="mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        chat mas yuda ganteng
      </button>
    </h2>
  );
}
