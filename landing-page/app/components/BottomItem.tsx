import { ReactNode } from "react"

const BottomItem = ({ title, children }: { title: string, children: ReactNode }) => {
  return (
    <div className="bottom-item-group">
      <p className="bottom-title">{title}</p>
      <div className="bottom-item">
        {children}
      </div>
    </div>
  )
}
export default BottomItem