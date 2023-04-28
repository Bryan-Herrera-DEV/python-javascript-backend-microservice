import { Outlet } from "react-router-dom"

const LandingLayout = () => {
  return (
    <div className="pt-5 px-14">
      <Outlet />
    </div>
  )
}

export default LandingLayout
