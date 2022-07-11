import DeFaultFrameSet from "@components/DefaultFrameSet";
import { useSelector } from "react-redux";
export default function TestPage() {
  const module = useSelector((state) => state.module.module);
  console.log(module);
  return <DeFaultFrameSet module={module} />;
}
