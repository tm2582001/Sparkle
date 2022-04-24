import {ReactComponent as Sparklesvg} from '../assets/sparkle.svg';

const SparkleInstance = ({ color, size, style })=>(
    <Sparklesvg 
        width={size}
      height={size}
      viewBox="0 0 160 160"
    //   fill="none"
      fill={color}
      style={ {position: "absolute",
                "pointer-events": "none",
                "z-index": 2,
                ...style
                }}
    > 
        {/* <path 
            d="all that stuff from before"
            fill={color}
        /> */}
    </Sparklesvg>
);

export default SparkleInstance;