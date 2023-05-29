import { Link, Route, Routes } from "react-router-dom"
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarkScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollow from "./who-to-follow-list";

function Tuiter() {
    return(
       <div>
         <Nav />
         <div className="row">
            <div className="col-2">
               <NavigationSidebar />
            </div>
            <div className="col-7">
               <Routes>
                  <Route path="/home" element={<HomeScreen />}></Route>
                  <Route path="/profile" element={<ProfileScreen />}></Route>
                  <Route path="/bookmarks" element={<BookmarkScreen />}></Route>
                  <Route path="/explore" element={<ExploreScreen />}></Route>
               </Routes>

            </div>
            <div className="col-3">
               <WhoToFollow />
            </div>
         </div>
       </div>
    );
 }
 export default Tuiter