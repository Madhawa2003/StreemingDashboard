export function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center z-50 text-white">
            <img
                src="https://i.gifer.com/ZZ5H.gif"
                alt="Loading..."
                className="w-16 h-16 mb-4"
            />
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-1 animate-pulse">
                    Getting things ready...
                </h2>
                <p className="text-gray-400 text-sm">
                    We know you're excited — your live broadcast is loading!
                </p>
            </div>
        </div>
    );
}
