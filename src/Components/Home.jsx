import React from 'react';
import "../index.css"


function Home() {
  return (
    <div style={{ 
      backgroundImage: `url("https://d2evkimvhatqav.cloudfront.net/images/_960xAUTO_crop_center-center_none/mother_cow_calf_31883069.jpg?v=1650463658,0.6021,0.4284")` 
    }}className="py-8 px-80 bg-slate-100 text-white text-xl">
		<marquee class="marq"
				direction="down"
				behavior="scroll"
				loop="60">
		<p className='p-4 h-60'>Title<br/>Date<br/>Description</p>
		<p className='p-4 h-60'>Title<br/>Date<br/>Description</p>
    	<p className='p-4 h-60'>Title<br/>Date<br/>Description</p>

		</marquee>
	</div>
  )
}

export default Home