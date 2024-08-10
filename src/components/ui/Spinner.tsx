export default function Spinner() {
  return (
    <div className="relative">
      <div className="h-24 w-24 rounded-full border-b-8 border-t-8 border-gray-200"></div>
      <div className="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-b-8 border-t-8 border-blue-500"></div>
    </div>
  );
}
