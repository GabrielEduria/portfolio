// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"


const Motion = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
      >
     {children}
  
    </motion.div>   
  )
}

export default Motion;