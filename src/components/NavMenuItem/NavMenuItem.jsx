const NavMenuItem = (props) => {
  return (
    <li className="trigger">
      <a href={props.href}>{props.text}</a>
      {
        props.submenu && props.submenu.length > 0 
          ? (
            <ul className="submenu">
              {props.submenu.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          )
          : null
      }
    </li>
  );
};

export default NavMenuItem;