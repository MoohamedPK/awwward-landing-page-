
function Loading({message}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="w-15 h-15 border-4 border-gray-300 border-t-yellow-secondary rounded-full animate-spin"></div>
      <p className="text-gray-600 text-3xl font-zentry-regular ">{message}</p>
    </div>
  );
}

export default Loading