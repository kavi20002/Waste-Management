export default function DriverStatus(status) {
  switch (status.toLowerCase()) {
    case "pending":
      return (
        <span className="px-2 py-1 capitalize rounded-md text-sky-300">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "conform":
      return (
        <span className="px-2 py-1 text-xs text-green-500 capitalize rounded-md">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "cancle":
      return (
        <span className="px-2 py-1 text-xs text-red-500 capitalize rounded-md">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    default:
      return (
        <span className="px-2 py-1 text-xs text-gray-500 capitalize rounded-md">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
  }
}
