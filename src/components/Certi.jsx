export default function Certi() {
    return (
        <div className="mt-10 relative z-20 text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-4">Our Certificates</h2>
            <div className="flex justify-center space-x-4">
                <div className="w-1/2 flex justify-center">
                    <iframe
                        src="/certificates/GPCB Certi..pdf"
                        className="w-full h-[800px] border border-gray-300 rounded-lg shadow-md scale-90"
                        title="Pollution Control Certificate"
                    />
                </div>
                <div className="w-1/2 flex justify-center">
                    <iframe
                        src="/certificates/ISO CERTIFICATE.PDF"
                        className="w-full h-[800px] border border-gray-300 rounded-lg shadow-md scale-90"
                        title="ISO Certificate"
                    />
                </div>
            </div>
        </div>
    );
}