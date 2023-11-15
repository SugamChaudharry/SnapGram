import { Outlet , Navigate } from "react-router-dom"

function AuthLayout() {
  const isAunthenticated = false;

  return (
    <>
      {isAunthenticated ? (
        <Navigate to="/" />
      ) : (
      <>
          <section className="flex justify-center items-center flex-col">
            <Outlet />
          </section>
          <img src="" alt="" />
        </>
      )}
    </>
  )
}

export default AuthLayout