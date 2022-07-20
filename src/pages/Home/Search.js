import { useLocation } from "react-router-dom";
import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";

function Search(props) {
  const location = useLocation();

  return (
    <NavigationLayout title="Tìm kiếm sản phẩm">
      <div>{location.state.message}</div>
    </NavigationLayout>
  );
}

export default Search;
