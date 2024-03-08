import social from "./../data/social.js";
import { AnimatedTooltip } from "./../util/animated-tooltip.jsx";

export default function tooltip() {
  return (
    <div>
      <AnimatedTooltip items={social} />
    </div>
  );
}
