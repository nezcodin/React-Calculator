const Operations = () => {
  return (
    <div className="operation-buttons">

      <div className="operation-math">
        <button id="add-button"> + </button>
        <button id="subtract-button"> - </button>
        <button id="multiply-button"> * </button>
        <button id="divide-button"> / </button>
      </div>

      <div className="operation-other">
        <button id="clear-button"> C </button>
        <button id="enter-button"> Enter </button>
      </div>
    </div>
  )
}

export default Operations