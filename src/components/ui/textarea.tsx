import React, { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', ...props }) => {
  const textareaId = props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        {...props}
        id={textareaId}
        className={`w-full px-3 py-2 bg-purple-950 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
          error ? 'border-red-500' : ''
        } ${className}`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default Textarea