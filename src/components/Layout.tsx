import { WrapperProps } from 'types';

const Layout: React.FC<WrapperProps> = (props) => {
  return (
    <div
      className={`fixed top-0 bottom-0 w-full bg-gradient-radial-purple ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Layout;
