//router
// import IndexRouters from "./router/index"

//scss
import "./assets/scss/socialv.scss"
import "./assets/scss/customizer.scss"


// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { setSetting } from './store/setting/actions'


function App(props) {
  const dispatch = useDispatch()
  dispatch(setSetting())


  return (
    <div className="App">
      {/* <IndexRouters /> */}
      {props.children}
    </div>
  );
}

export default App;
