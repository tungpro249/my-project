import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <h2 className="text-2xl font-bold mt-4">Oops! This Page Could Not Be Found</h2>
      <p className="text-gray-600 mt-2">
        Sorry but the page you are looking for does not exist, have been
        removed, name changed or is temporarily unavailable.
      </p>
      <Link href="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 cursor-pointer">GO TO HOMEPAGE</button>
      </Link>
    </div>
  );
}
