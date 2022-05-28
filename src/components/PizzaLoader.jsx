import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="118" cy="142" r="118" /> 
    <rect x="17" y="312" rx="11" ry="11" width="212" height="62" /> 
    <rect x="18" y="390" rx="0" ry="0" width="90" height="37" /> 
    <rect x="132" y="390" rx="8" ry="8" width="98" height="37" /> 
    <rect x="17" y="270" rx="0" ry="0" width="212" height="25" />
  </ContentLoader>
)

export default PizzaLoader

