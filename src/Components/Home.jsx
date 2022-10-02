import React from 'react';
import "../index.css"


function Home() {
  return (
    <div style={{ 
      backgroundImage: `url("https://d2evkimvhatqav.cloudfront.net/images/_960xAUTO_crop_center-center_none/mother_cow_calf_31883069.jpg?v=1650463658,0.6021,0.4284")` ,
    height:"100%",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover"}}className=" px-80 bg-slate-100 text-white text-xl">
		<marquee class="marq"
				direction="down"
				behavior="scroll"
				loop="60">
		<p className='p-4 h-60'>Title: Animal Abuse<br/>Date: 12/03/2019<br/> Hoarding behavior often victimizes animals. Sufferers of a hoarding disorder may impose severe neglect on animals by housing far more than they are able to adequately take care of. Serious animal neglect (such as hoarding) is often an indicator of people in need of social or mental health services.</p>
		<p className='p-4 h-60'>Title: Animal Abuse<br/>Date: 12/03/2019<br/> Hoarding behavior often victimizes animals. Sufferers of a hoarding disorder may impose severe neglect on animals by housing far more than they are able to adequately take care of. Serious animal neglect (such as hoarding) is often an indicator of people in need of social or mental health services.</p>
		<p className='p-4 h-60'>Title: Animal Abuse<br/>Date: 12/03/2019<br/> Hoarding behavior often victimizes animals. Sufferers of a hoarding disorder may impose severe neglect on animals by housing far more than they are able to adequately take care of. Serious animal neglect (such as hoarding) is often an indicator of people in need of social or mental health services.</p>
		</marquee>
	</div>
  )
}

export default Home