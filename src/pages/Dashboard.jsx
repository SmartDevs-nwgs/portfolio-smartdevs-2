import SandHeader from '../Components/SandHeader'
import ContentHeader from '../Components/ContentHeader'
import StartSection from '../Components/StartSection'

// eslint-disable-next-line react/prop-types
const Dashboard = ({ sound, setSound }) => {
  return (
    <>
      <SandHeader />
      <ContentHeader />
      <StartSection sound={sound} setSound={setSound} />
    </>
  )
}
export default Dashboard
