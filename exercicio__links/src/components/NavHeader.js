export default function NavHeader() {
  return (
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span> <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a href="/" className="navbar-brand page-scroll">
        React Landing Page
      </a>
      
    </div>
  );
}
