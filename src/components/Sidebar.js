import Link from "./Link";


function Sidebar() {

    const links = [
        {label:'Dropdown', path: '/dropdown'},
        {label:'Accordion', path: '/accordion'},
        {label:'Buttons', path: '/buttons'},
        {label:'Modal', path: '/modal'},
        {label:'Counter', path: '/counter'},
        {label:'Table', path: '/table'}
    ];

    const renderedLinks = links.map((link) => {
      return <Link key={link.label} to={link.path} activeClassName="font-bold">{link.label}</Link>
    });
return(
    <div className="sticky top-0 flex flex-col cursor-pointer">
        {renderedLinks}
    </div>
)
};

export default Sidebar;