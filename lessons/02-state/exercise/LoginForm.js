import React, { useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { FaSignInAlt } from "react-icons/fa"
import TabsButton from "app/TabsButton"
import { login } from "app/utils"

// import LoginFormFinal from './LoginForm.final'
// export default LoginFormFinal

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => {
    setShowPassword(oldShowPassword => !oldShowPassword)
  }

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = event => {
    event.preventDefault()
    setLoading(true)
    const [emailNode, passwordNode] = event.target.elements
    login(emailNode.value, passwordNode.value)
      .then(() => {
        setError(null)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => setLoading(false))
  }

  return (
    <form onSubmit={handleLogin}>
      <VisuallyHidden>
        <label htmlFor="login:email">Email:</label>
      </VisuallyHidden>
      <input
        type="text"
        id="login:email"
        className="inputField"
        placeholder="you@example.com"
      />

      <VisuallyHidden>
        <label htmlFor="login:password">Password:</label>
      </VisuallyHidden>
      <input
        id="login:password"
        type={showPassword ? "text" : "password"}
        className="inputField"
        placeholder="Password"
      />

      <div>
        <label>
          <input
            className="passwordCheckbox"
            type="checkbox"
            defaultChecked={showPassword}
            onChange={toggleShowPassword}
          />{" "}
          show password
        </label>
      </div>

      <TabsButton>
        <FaSignInAlt />
        <span>{loading ? "...loading" : "Login"}</span>
      </TabsButton>
      {error && (
        <div style={{ color: "red" }}>
          <p>Oops, there was an error logging you in!</p>
          <p>
            <i>{error.message}</i>
          </p>
        </div>
      )}
    </form>
  )
}
