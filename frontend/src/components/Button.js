"use client"

function Button({ children, type = "button", className = "", onClick }) {
  return (
    <button type={type} className={`px-6 py-3 rounded-md font-medium transition-colors ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

