import { BrowserRouter, Switch, Route } from "react-router-dom"
import Coin from './routes/Coin'
import Coins from "./routes/Coins"

interface IRouterProps {
  // void라고 쓰면 오류남....!
  toggleDark: ()=>void;
  isDark:boolean;

}
function Router({toggleDark,isDark} : IRouterProps){
  return(
  <BrowserRouter>
    <Switch>
      <Route path="/:coinId">
        <Coin isDark={isDark}/>
      </Route>
      <Route path="/">
        <Coins toggleDark={toggleDark} />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}

export default Router