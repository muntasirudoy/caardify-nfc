export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
            <p className="text-gray-600 mt-4">Loading...</p>
        </div>

    );
}