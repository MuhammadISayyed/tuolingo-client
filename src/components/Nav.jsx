// import '../../index.css';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

// export default function Nav() {
//   return (
//     <div>
//       <div>Tuolingo</div>
//       <div>
//         <a href="#">LEARN</a>
//         <a href="#">PRACTICE</a>
//         <a href="#">LEADERBOARDS</a>
//         <a href="#">QUESTS</a>
//         <a href="#">SHOP</a>
//         <a href="#">PROFILE</a>
//         <a href="#">MORE</a>
//       </div>
//     </div>
//   );
// }

const Nav = () => {
  return (
    <NavigationMenu.Root orientation="vertical">
      <NavigationMenu.List className="list-none flex flex-col gap-7 ps-6">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">
            <img className="w-28" src="public/logotype.svg" alt="Duolingo logo" />
            {/* <svg width={100} height={100} src="public/logotype.svg"></svg> */}
            {/* <object data="public/logotype.svg" width={50} height={50}></object> */}
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">LEARN</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">PRACTICE</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">LEADERBOARDS</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">QUESTS</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">SHOP</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">PROFILE</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">MORE</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Nav;
