import React, { Fragment } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { FaDumbbell } from "react-icons/fa"
import { DateFields, MonthField, DayField, YearField } from "app/DateFields"

function TabsButton({ children }) {
  return <button className="TabsButton icon_button cta">{children}</button>
}

function TextInput({ id, label, type = "text" }) {
  return (
    <Fragment>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <input
        id={id}
        type={type}
        placeholder={label}
        className="inputField"
        required
      />
    </Fragment>
  )
}

export default function SignupForm() {
  return (
    <form className="SignupForm">
      <TextInput id="signup:displayName" label="Display name" />
      <TextInput id="signup:photoUrl" label="Photo url" />
      <TextInput id="signup:email" label="you@example.com" />
      <TextInput id="signup:password" label="Password" type="password" />
      <p>
        <span>Start:</span>{" "}
        <DateFields value={new Date()}>
          <MonthField />
          <DayField />
          <YearField start={2016} end={2021} />
        </DateFields>
        <TabsButton>
          <FaDumbbell />
          <span>Signup</span>
        </TabsButton>
      </p>
    </form>
  )
}
