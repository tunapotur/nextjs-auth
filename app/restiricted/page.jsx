import Image from "next/image";

function RestirictedPage() {
  return (
    <main className="main">
      <Image
        src="/warning-restricted-area.png"
        width={500}
        height={500}
        alt="Warning Restricted Area"
        className="h-auto w-auto"
      />
    </main>
  );
}

export default RestirictedPage;
