import { Spinner } from "./components/spinner";

export default function Loading() {
  return (
    <main className="flex flex-col gap-y-8">
      <h1 className="text-4xl font-bold text-center">JSON Placeholder Posts</h1>
      <div className="flex justify-center">
        <Spinner />
      </div>
    </main>
  );
}
