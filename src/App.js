import Container from "./components/container";
import Header from "./components/header";
import Section from "./components/section";
import Task from "./components/task";
import { FaCheck } from "react-icons/fa"
import Footer from "./components/footer";





function App() {

  return <>
    <Container>
      <Header />
      <Section>
        <Task content="task 3"><div className="icon">
          <span className="iconGreen"><FaCheck /></span>
        </div></Task>
        <Task content="task 2" ><div className="icon">
          <span className="iconGreen"><FaCheck /></span>
        </div></Task>
        <Task content="ádasdasd" ><div className="icon">
          <span className="iconGreen"><FaCheck /></span>
        </div></Task>
        <Task content="hihihahaa" ><div className="icon">
          <span className="iconGreen"><FaCheck /></span>
        </div></Task>
        <Task content2="đi ngủ thôi" />
        

      </Section>
      <Footer />
    </Container>
    

  </>
const changeYourLife = () => {
}
}
export default App;
