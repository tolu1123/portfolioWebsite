import React, {useEffect} from "react";

import KUTE from 'kute.js'

import breastCancer from "../../public/images/works/surgery.jpg";

const SvgComponent = () => {

    useEffect(() => {
        const morphAnimation = KUTE.fromTo(
            '#blob1', 
            { path: '#blob1' }, 
            { path: '#blob2' },
            {repeat: 999, duration: 3000, yoyo: true }
        );
        morphAnimation.start();
      }, []);

  return (
    // <svg
    //   className=""
    //   id="visual"
    //   viewBox="0 0 300 300"
    //   width="300"
    //   height="300"
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink" // Use xmlnsXlink instead of xmlns:xlink
    //   version="1.1"
    // >
    //   <defs>
    //     <pattern id="image" x="0" y="0" width="100%" height="100%">
    //       <image
    //         x="0"
    //         y="0"
    //         width="100%"
    //         height="100%"
    //         className="object-cover"
    //         xlinkHref={breastCancer} // Add the URL to your background image here
    //       />
    //     </pattern>
    //   </defs>
    //   <g transform="translate(450.34449071472056 273.70809704250627)">
    //     <path
    //       d="M185.9 -166.4C230.4 -141.4 248.7 -70.7 234.7 -14C220.7 42.7 174.3 85.3 129.8 129.8C85.3 174.3 42.7 220.7 -8.8 229.5C-60.3 238.3 -120.7 209.7 -165.5 165.2C-210.3 120.7 -239.7 60.3 -240 -0.4C-240.4 -61 -211.8 -122.1 -166.9 -147.1C-122.1 -172.1 -61 -161.1 4.8 -165.9C70.7 -170.7 141.4 -191.4 185.9 -166.4"
    //       fill="url(#image)" // Use the pattern as the fill for the path
    //     />
    //   </g>
    // </svg>

    <svg
      id="visual"
      viewBox="0 0 300 300"
      width="300"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink" // Use xmlnsXlink instead of xmlns:xlink
      version="1.1"
    >
      <defs>
        <pattern id="image" x="0" y="0" width="100%" height="100%">
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            className="object-none object-center"
            xlinkHref={breastCancer} // Add the URL to your background image here
          />
        </pattern>
      </defs>

      <g transform="translate(163.74268497542133 142.96741156342762)">
        <path
            id="blob1"
          d="M79 -84.3C91.5 -66.5 83.2 -33.2 84.2 0.9C85.1 35.1 95.2 70.2 82.7 92.2C70.2 114.2 35.1 123.1 4 119.1C-27.1 115.1 -54.2 98.2 -75.2 76.2C-96.2 54.2 -111.1 27.1 -115.2 -4.1C-119.4 -35.4 -112.7 -70.7 -91.7 -88.5C-70.7 -106.4 -35.4 -106.7 -1.1 -105.6C33.2 -104.6 66.5 -102.1 79 -84.3"
          fill="url(#image)"
        ></path>
      </g>

      <g transform="translate(133.2614424992644 162.1547815838131)" className="invisible">
        <path
            id="blob2"
          d="M83.4 -82.6C107.9 -58.9 127.5 -29.5 121.6 -5.9C115.7 17.7 84.4 35.4 59.9 55.4C35.4 75.4 17.7 97.7 -4.6 102.3C-26.9 106.9 -53.7 93.7 -66.2 73.7C-78.7 53.7 -76.9 26.9 -81.1 -4.2C-85.4 -35.4 -95.7 -70.7 -83.2 -94.4C-70.7 -118 -35.4 -130 -2.9 -127.1C29.5 -124.1 58.9 -106.3 83.4 -82.6"
          fill="url(#image)"
        ></path>
      </g>
    </svg>
  );
};

export default SvgComponent;
