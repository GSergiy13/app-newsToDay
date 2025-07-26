import { createContext, type ReactNode, useContext, useState } from 'react'

interface Context {
	isDark: boolean
	toggleTheme: () => void
}

export const Context = createContext<Context | undefined>(undefined)

export const useMyContext = () => {
	const context = useContext(Context)

	if (!context) {
		throw new Error('Error context is undefined')
	}

	return context
}

interface ContextProviderProps {
	children: ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [isDark, setIsDark] = useState(false)

	const toggleTheme = () => {
		setIsDark(prev => !prev)
	}

	return (
		<Context.Provider
			value={{
				isDark: isDark,
				toggleTheme: toggleTheme,
			}}
		>
			{children}
		</Context.Provider>
	)
}
