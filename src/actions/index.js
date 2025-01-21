export const INCREASE = 'INCREASE'
export  const DECREASE = 'DECREASE'
export  const LAST_ACTION = "LAST_ACTION"
export const increase = () => ({
   type:INCREASE 
})
export const decrease = () => ({
   type:DECREASE 
})
export const setLastAction = () => ({
   type:LAST_ACTION,
    payload:action
})