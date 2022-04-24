import { ReactComponent as Sparklesvg } from "../assets/sparkle.svg";
import "./sparkle-instance.styles.css";
const SparkleInstance = ({ color, size, style }) => (
  <div className="sparkle-div" style={style}>
    <Sparklesvg
      className="sparkle-svg"
      width={size}
      height={size}
      viewBox="0 0 160 160"
      //   fill="none"
      fill={color}
    //   style={style}
    >
      {/* <path 
            d="all that stuff from before"
            fill={color}
        /> */}
    </Sparklesvg>
   </div>
);

export default SparkleInstance;
