export function Card({ children, className="" }) {
    return (
        <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
            {children}
        </div>
    )
}

export function CardHeader({ children, className = "" }) {
    return (
        <div className={`p-4 ${className}`}>
            {children}
        </div>
    )
}
  
export function CardTitle({ children, className = "" }) {
    return (
        <h3 className={`text-lg font-semibold ${className}`}>
            {children}
        </h3>
    )
}
  
export function CardDescription({ children, className = "" }) {
    return (
        <p className={`text-sm text-gray-500 mt-1 ${className}`}>
            {children}
        </p>
        
    )
}
  
export function CardContent({ children, className = "" }) {
    return (
        <div className={`p-4 pt-0 ${className}`}>
            {children}
        </div>
    )
}
  
export function CardFooter({ children, className = "" }) {
    return (
        <div className={`p-4 border-t border-gray-100 ${className}`}>
            {children}
        </div>
    )
}