import Section1 from "../(BodySection)/Section1";
import Skills from "../(BodySection)/Skills";
import Security from "../(BodySection)/Security";
import Projects from "../(BodySection)/Projects";

function HomeBody() {
  return (
    <div className="w-auto h-auto m-auto">
      <Section1/>
      <Skills/>
      <Security/>
      <Projects/>
    </div>
  )
}

export default HomeBody;