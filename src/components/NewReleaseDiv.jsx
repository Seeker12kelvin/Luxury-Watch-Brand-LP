import styles from "./NewReleaseDiv.module.css"

const NewReleaseBadge = ({text = 'NEW RELEASE'}) => {
  return (
    <div className="relative w-fit inline-block">
      <div className="relative px-2 py-0.5 text-white mb-3 bg-white/15 backdrop-blur-md rounded-sm">

        <span className={`${styles['new-release']} text-[1rem] font-light tracking-[-0.02rem]`}>{text}</span>

        {/* Top-left */}
        <span className="absolute top-0 left-0 w-1 h-1 border-t-2 border-l-2 border-white" />

        {/* Top-right */}
        <span className="absolute top-0 right-0 w-1 h-1 border-t-2 border-r-2 border-white" />

        {/* Bottom-left */}
        <span className="absolute bottom-0 left-0 w-1 h-1 border-b-2 border-l-2 border-white" />

        {/* Bottom-right */}
        <span className="absolute bottom-0 right-0 w-1 h-1 border-b-2 border-r-2 border-white" />
      </div>
    </div>
  )
}

export default NewReleaseBadge