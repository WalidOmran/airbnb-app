function CityPage({params}) {
    console.log(params);
  return (
    <div>
      city : {decodeURIComponent(params.city)}
    </div>
  )
}

export default CityPage
