import Smartphones from "./phone/page";
import Topcategoies from "./top-categories/page";
import Electronic from "./electronics-brands/page";
import Essential from "./essentials/page";
import Header from "./hero/page";



export default function Home() {
  return (
<div>
  <Header/>
  <Smartphones/>
  <Topcategoies/>
  <Electronic/>
  <Essential/>
</div>
  );
}
