const Waves = () => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 select-none pointer-events-none">
            <div className="relative flex items-center justify-center">
                <div
                    className="absolute w-64 h-64 rounded-full border border-dashed border-indigo-400/15"
                    style={{ animation: 'rotateSlow 28s linear infinite' }}
                />
                <div className="absolute w-44 h-44 rounded-full border border-indigo-400/10" />

                <div className="flex items-center gap-1.25 h-14">
                    {[0.35, 0.55, 0.75, 0.9, 1, 0.9, 0.75, 0.55, 0.35].map(
                        (opacity, i) => (
                            <div
                                key={i}
                                className="w-1.5 rounded-full bg-blue-500"
                                style={{
                                    height: '56px',
                                    opacity: opacity * 0.5,
                                    transformOrigin: 'center bottom',
                                    animation: `wavebar 3s ease-in-out infinite ${i * 0.12}s`,
                                }}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Waves
