/**
 * A single animated waveform line, evoking radio-signal propagation.
 * This is the one deliberate motion moment on the site (per design brief) —
 * it should not be reused as decoration elsewhere.
 */
export default function SignalWave({ className = '' }) {
    return (
        <svg
            viewBox="0 0 1200 200"
            className={className}
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <path
                d="M0,100 C100,100 100,40 200,40 C300,40 300,160 400,160 C500,160 500,20 600,20 C700,20 700,180 800,180 C900,180 900,60 1000,60 C1100,60 1100,100 1200,100"
                fill="none"
                stroke="#E8A33D"
                strokeWidth="2"
                strokeDasharray="8 6"
                className="animate-signal-sweep"
                opacity="0.6"
            />
            <path
                d="M0,100 C100,100 100,40 200,40 C300,40 300,160 400,160 C500,160 500,20 600,20 C700,20 700,180 800,180 C900,180 900,60 1000,60 C1100,60 1100,100 1200,100"
                fill="none"
                stroke="#3A4A5E"
                strokeWidth="1"
                opacity="0.4"
            />
        </svg>
    );
}
