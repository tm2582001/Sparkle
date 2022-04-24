// import generateSparkle from "./generate-sparkle.component";
import SparkleInstance from "./sparkle-instance.component";
import './sparkles.styles.css';

const Sparkles = ({ children,sparkle }) => {
//   const sparkle = generateSparkle();
  return (
    <span>
      <SparkleInstance
        key={sparkle.id}
        color={sparkle.color}
        size={sparkle.size}
        style={sparkle.style}
      />
      <strong>{children}</strong>
    </span>
  );
};


export default Sparkles;