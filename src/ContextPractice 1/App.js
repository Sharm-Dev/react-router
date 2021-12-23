import React from "react"

import Header from "./Header"

/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 * 
 * Use the static class property `contextType` on any components that need to consume context.
 * https://reactjs.org/docs/context.html
 */

function App() {
    return (
        <div>
            <Header />
            <main>
                <p className="main">No new notifications, Username! 🎉</p>
            </main>
        </div>
    )
}

export default App