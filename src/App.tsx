import Hero from "./component/Hero"
import Rockets from "./component/Rockets"
import RootLayout from "./component/RootLayout"

const App = () => {
  return (
    <div>
      <RootLayout>
        <Hero />
        <Rockets />
      </RootLayout>
    </div>
  )
}
export default App