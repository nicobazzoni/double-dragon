const Subscribe = () => {
  return (
    <section className=' relative  max-sm:mt-12 p-2 border rounded-md bg-slate-100' style={{width: '800px', height: '600px'}}>
      <iframe 
        title="Back Kick" 
        className="absolute top-0 right-4 w-full h-full" 
        frameborder="0" 
        allowfullscreen 
        mozallowfullscreen="true" 
        webkitallowfullscreen="true" 
        allow="autoplay; fullscreen; xr-spatial-tracking" 
        xr-spatial-tracking 
        execution-while-out-of-viewport 
        execution-while-not-rendered 
        web-share 
        src="https://sketchfab.com/models/a490933972e2402ca25b7ee374bec080/embed?autostart=1&ui_infos=0&ui_controls=0"
      ></iframe>
      <div className='flex flex-col justify-start gap-5 z-10'>
        {/* You can put additional content here */}
      </div>
    </section>
  );
};

export default Subscribe;
