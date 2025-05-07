function CrossSkills() {
  return (
    <>
      <div className="absolute flex justify-center items-center h-full w-full">
        <div
          className="w-[2px] h-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent,#6aceff 10% ,#6aceff 90% ,transparent)",
          }}
        ></div>
      </div>
      <div className="absolute flex justify-center items-center h-full w-full">
        <div
          className="h-[2px] w-full"
          style={{
            background:
              "linear-gradient(to right, transparent,  #6aceff 10% ,#6aceff 90% , transparent)",
          }}
        ></div>
      </div>

      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(255,255,0,0.2), transparent 70%)",
        }}
      />

      <div
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(0,255,0,0.2), transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(255,0,0,0.2), transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(128,0,128,0.2), transparent 70%)",
        }}
      />
    </>
  );
}

export default CrossSkills;
