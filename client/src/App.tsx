import React, { Suspense } from "react";

const UserProfile = React.lazy(() => import("./UserProfile"));

function App() {
  return (
    <>
      <div>
        <h1>Hello World!!</h1>
      </div>
      <Suspense fallback="Loading...">
        <UserProfile />
      </Suspense>
    </>
  );
}

export default App;
