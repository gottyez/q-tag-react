import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
    { path: '/', element: <h1>  home page</h1>},
    { path: '/register', element: <h1>  register</h1>},
    { path: '/login', element: <h1>  login</h1>},

])

export default function Router() {
  return (
    <RouterProvider router={router}> </RouterProvider>
  )
}