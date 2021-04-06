export default function (state = [], action) {
  switch (action.type) {
    case "ITEM_SELECTED":
      return action.payload;
    default:
  }

  return state;
}
