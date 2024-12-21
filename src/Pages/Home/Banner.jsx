import React from "react";
import { motion } from "motion/react";
import team2 from '../../assets/Team/team2.jpg'
import team1 from '../../assets/Team/team1.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team2}
            // initial={{x:100, y:-100}}
            animate={{y:[0,50,0]}}
            transition={{duration:10,  repeat:Infinity, ease:"easeOut"}}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500 shadow-2xl w-64"
            alt="Box Office"
          />
          <motion.img
            src={team1}
            // initial={{x:100, y:-100}}
            animate={{x:[100,150,100]}}
            transition={{duration:10,  repeat:Infinity, delay:5, ease:"easeOut"}}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500 shadow-2xl w-64"
            alt="Box Office"
          />
        </div>
        <div className="flex-1">
         
          <motion.h1
          animate={{x:50}}
          transition={{duration:2, delay:1, ease:'easeOut', repeatDelay:1 , repeat:Infinity}}

          className="text-5xl font-bold">Latest <motion.span 
          animate={{color:['#f8ff33','#67ff33','#33fff3','#ff3350']}}
          transition={{duration:1.5,repeatDelay:1, repeat:Infinity,}}
          >Job</motion.span> For You!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
