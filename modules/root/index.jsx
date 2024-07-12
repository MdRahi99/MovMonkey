import Banner from "./components/Banner";
import KeyPoints from "./components/KeyPoints";
import NewBanner from "./components/NewBanner";
import NewKeyPoints from "./components/NewKeyPoints";
import Slider from "./components/Slider";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* <Banner /> */}
      {/* <Slider /> */}
      {/* <KeyPoints /> */}
      <NewBanner />
      <NewKeyPoints />
    </div>
  );
}
