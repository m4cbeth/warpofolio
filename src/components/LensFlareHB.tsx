

export default function LensFlareBreak() {
    return (
        <div className="justify-center" style={{
        width: "100%",
        height: "10px",
        background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,105,250,0.8) 50%, rgba(255,255,255,0) 100%)",
        filter: "blur(4px)",
        margin: "20px 0",
        display: "flex",
        position: "relative",

        }}
      >
        <div className="absolute w-3 h-3 place-self-center bg-white rounded-full opacity-75"></div>
        <div className="absolute w-5 h-5 place-self-center bg-white rounded-full blur"></div>
        <div className="absolute w-5 h-5 place-self-center bg-white rounded-full opacity-60 blur"></div>
        <div className="absolute w-10 h-5 place-self-center bg-indigo-100 rounded-full opacity-60 blur-lg"></div>
        <div className="absolute w-15 h-5 place-self-center bg-fuchsia-500 rounded-full opacity-60 blur-xl"></div>
        <div className="absolute w-20 h-5 place-self-center bg-violet-500 rounded-full opacity-60 blur-xl"></div>
        {/* <div className="absolute w-25 h-5 place-self-center bg-cyan-500 rounded-full opacity-60 blur-xl"></div> */}
      </div>
    )
}