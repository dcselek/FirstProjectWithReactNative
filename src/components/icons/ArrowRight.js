import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRight(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-right_svg__feather arrow-right_svg__feather-arrow-right"
      {...props}
    >
      <Path d="M5 12h14M12 5l7 7-7 7" />
    </Svg>
  );
}

export default SvgArrowRight;
