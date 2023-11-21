/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom';

import MenuItem from '../menu/MenuItem';
import { getMenu } from '../../services/apiRestaurant';

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map(pizza => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
