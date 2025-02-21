import { TypedUseSelectorHook, useSelector as useSelectorReduxToolkit } from 'react-redux'
import { RootState } from '~/store'

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorReduxToolkit
