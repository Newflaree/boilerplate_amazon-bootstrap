export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className='p-4 bg-dark text-white  wcontainer text-center'>
        <h4>Footer</h4>
        <h5>{ currentYear }</h5>
      </div>
    </div>
  );
}
