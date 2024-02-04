// function Container(children: React.ReactNode) {
//   return <div>{children}</div>;
// }
//
// directly parameter ma type define OR

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-[1920px] mx-auto xl:px-20 md:px-10 px-4'>
      {children}
    </div>
  );
};

export default Container;
