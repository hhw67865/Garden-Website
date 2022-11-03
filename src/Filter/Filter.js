const Filter = ({handleChange}) => {
    return (
        <div className="item2">
            <div id="plantSearch">
                <input type="text" onChange={handleChange} placeholder="Search.."></input>
            </div>
            <label htmlFor="maturity">Day to Maturity</label>
            <select name="maturity" id="maturity" style={{width:"150px"}}>
                <option value="Any">Any</option>
                <option value="30">within 30 days</option>
                <option value="60">within 60 days</option>
                <option value="90">within 90 days</option>
                <option value="120">within 120 days</option>
            </select>
        </div>
    )
}

export default Filter