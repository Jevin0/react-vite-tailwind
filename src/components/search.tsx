function Search() {
  const fun1 = () => {
    return 123
  }

  fun1()

  return (
    <div className="flex flex-1">

      <input placeholder="Search..." className="border"></input>
      <div>
        <input type="checkbox" id="scales" name="scales" />
        <label>Only show products in stock</label>
      </div>
    </div>
  )
}

export default Search
