import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewAallJobs from '../components/ViewAllJobs'
const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCard />
    <JobListings isHome={true}/>
    <ViewAallJobs />
    </>
  )
}

export default HomePage