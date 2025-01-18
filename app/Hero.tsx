import BackgroundLayer from "./components/BackgroundLayer";
import Name from "./components/Name";

function Hero() {
  return (
    <>
    <BackgroundLayer speed={0} div_id="sky-0"/>
    <BackgroundLayer speed={-1.2} div_id="clouds-1"/>
    <BackgroundLayer speed={-1} div_id="mountains-2"/>
    <BackgroundLayer speed={-0.8} div_id="mountains-3"/>
    <BackgroundLayer speed={-0.6} div_id="mountains-4"/>
    <BackgroundLayer speed={0.5} div_id="birds-5"/>
    <BackgroundLayer speed={0.3} div_id="birds-6"/>
    <Name speed={-0.4} text="Arthur Rasera"/>
    <BackgroundLayer speed={-0.4} div_id="bridge-7"/>
    <BackgroundLayer speed={-0.2} div_id="forest-8"/>
    <BackgroundLayer speed={0} div_id="forest-9"/>
    </>
  );
}

export default Hero;
